import fs from 'fs';
import path from 'path';

const TERMS_PATH = path.join(process.cwd(), 'docs/terms_of_service.md');
const EMAIL_PATTERN = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

interface TermsGroupConfig {
  eyebrow: string;
  heading: string;
  sectionNumbers: number[];
}

// Presentation only: groups the numbered `## ` sections of the doc into the
// banded blocks used on the privacy policy page.
const TERMS_GROUPS: TermsGroupConfig[] = [
  { eyebrow: 'Algemeen', heading: 'Jij, je account en je training', sectionNumbers: [1, 2, 3, 4] },
  { eyebrow: 'Gebruik & inhoud', heading: 'Wat wel en niet mag', sectionNumbers: [5, 6] },
  {
    eyebrow: 'Juridisch',
    heading: 'Wijzigingen en aansprakelijkheid',
    sectionNumbers: [7, 8, 9, 10],
  },
];

export interface TermsSection {
  number: number | null;
  title: string;
  body: string;
}

export interface TermsGroup {
  eyebrow: string;
  heading: string;
  sections: TermsSection[];
}

export interface TermsDocument {
  title: string;
  version: string;
  groups: TermsGroup[];
}

function linkEmails(markdown: string): string {
  return markdown.replace(EMAIL_PATTERN, (email) => `[${email}](mailto:${email})`);
}

function parseSections(content: string): TermsSection[] {
  return content
    .split(/^## /m)
    .slice(1)
    .map((chunk) => {
      const [heading, ...body] = chunk.split('\n');
      const title = heading.trim();
      const number = title.match(/^(\d+)\./)?.[1];
      return {
        number: number ? Number(number) : null,
        title,
        body: linkEmails(body.join('\n').trim()),
      };
    });
}

function groupSections(sections: TermsSection[]): TermsGroup[] {
  const groups = TERMS_GROUPS.map(({ eyebrow, heading, sectionNumbers }) => ({
    eyebrow,
    heading,
    sections: sections.filter(
      (section) => section.number !== null && sectionNumbers.includes(section.number),
    ),
  }));

  // Sections added to the doc but not yet assigned to a group are appended to
  // the last group, so nothing in the doc is ever silently dropped.
  const grouped = new Set(groups.flatMap((group) => group.sections));
  groups[groups.length - 1].sections.push(...sections.filter((s) => !grouped.has(s)));

  return groups.filter((group) => group.sections.length > 0);
}

/**
 * Parses docs/terms_of_service.md. Everything above the first `---` is the
 * internal editing header (title, version line, note) and is not published
 * as body content; everything below is split into sections on `## ` headings.
 */
export function getTerms(): TermsDocument {
  const raw = fs.readFileSync(TERMS_PATH, 'utf-8').replace(/\r\n/g, '\n');

  const dividerIndex = raw.search(/^---$/m);
  if (dividerIndex === -1) {
    throw new Error('terms_of_service.md is missing the `---` divider after its header');
  }

  const headerLines = raw
    .slice(0, dividerIndex)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const title = headerLines.find((line) => line.startsWith('# '))?.slice(2);
  const version = headerLines[1];
  if (!title || !version) {
    throw new Error('terms_of_service.md is missing its title or version line');
  }

  const sections = parseSections(raw.slice(dividerIndex));
  if (sections.length === 0) {
    throw new Error('terms_of_service.md contains no `## ` sections');
  }

  return { title, version, groups: groupSections(sections) };
}
