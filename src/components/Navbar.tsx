import Button from "./Button";

type NavbarProps = {
  brandName?: string;
  logoSrc?: string;
  links: { label: string; to: string }[];
  dropdownIconSrc?: string;
};

export default function Navbar({
  brandName,
  links,
  dropdownIconSrc,
}: NavbarProps) {
  const navClasses =
    "flex items-center justify-between md:justify-start bg-transparent py-5 px-6 md:px-12";
  const linkListClasses = "hidden md:flex gap-x-4 md:ml-16";
  return (
    <>
    <nav className={navClasses}>
      <h1>{brandName}</h1>
      <ul className={linkListClasses}>
        {links.map((link, index) => (
          <li key={index}>
            <Button to={link.to} variant="anchor">
              {link.label}
            </Button>
          </li>
        ))}
      </ul>
      {dropdownIconSrc && (
        <img src={dropdownIconSrc} alt="Dropdown" className="h-10 md:hidden" />
      )}
    </nav>
    </>
  );
}
