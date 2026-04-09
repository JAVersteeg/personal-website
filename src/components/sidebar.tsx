import NavLinks from "@/components/nav-links";

export default function Sidebar() {
  return (
    <nav className="hidden xl:flex fixed top-[33vh] right-[calc(50%+336px)] w-48 p-6 flex-col gap-4">
      <NavLinks />
    </nav>
  );
}
