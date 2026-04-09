import Link from "next/link";

interface NavLinksProps {
  onClick?: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/reading", label: "Reading" },
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function NavLinks({ onClick }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="text-lg font-serif font-light"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
