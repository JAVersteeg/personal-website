'use client';

import BackHome from '@/components/back-button';
import Card from '@/components/card';
import ContainerFullWidth from '@/components/container-full';
import { StrideLogo } from '@/components/stride-logo';
import { useTranslation } from '@/hooks/useTranslation';
import { CardProps } from '@/types/types';

export const PROJECTS: CardProps[] = [
  {
    category: 'App',
    eyebrowKey: 'nav.projects',
    title: 'Stride',
    subtitle: 'Coaching app for running',
    contentTranslationKey: 'pages.projects.stride.description',
    href: '/stride',
    image: <StrideLogo width={250} className="text-[var(--text-color)]" />,
  },
  {
    category: 'Game',
    eyebrowKey: 'nav.projects',
    title: 'Road-cycling board game',
    subtitle: 'Hotseat road-cycling board game',
    contentTranslationKey: 'pages.projects.flammerouge.description',
    href: '/flamme-rouge/',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1 className="header mb-8">{t('pages.projects.title')}</h1>
      <div className="flex flex-wrap gap-4">
        {PROJECTS.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </ContainerFullWidth>
  );
}
