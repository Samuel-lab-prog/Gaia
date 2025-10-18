import Button from "../components/Button"

type DropdownProps = {
  links: { label: string; to: string }[]
  isOpen: boolean
}

const menuClasses =
  "md:hidden absolute top-0 right-0 bg-black border-l-2 border-white shadow-lg p-5 mt-20 z-10 w-42 h-full flex flex-col gap-y-3 transition-transform duration-300 ease-in-out overflow-hidden"

export default function Dropdown({ links, isOpen }: DropdownProps) {
  return (
    <menu
      className={`${menuClasses} ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {links.map((link) => (
        <li key={link.to}>
          <Button
            to={link.to}
            variant="anchor"
            className="text-white hover:text-gray-300" 
          >
            {link.label}
          </Button>
        </li>
      ))}
    </menu>
  )
}
