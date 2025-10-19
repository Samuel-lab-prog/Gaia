import Button from "./Button"
import { useState } from "react"
import Dropdown from "./Dropdown"

type NavbarProps = {
  brandName?: string
  logoSrc?: string
  links: { label: string; to: string }[]
  dropdownIconSrc?: string
}

export default function Navbar({
  brandName,
  links,
  dropdownIconSrc,
}: NavbarProps) {
  const navClasses =
    "flex items-center justify-between md:justify-start bg-transparent py-2 h-32 px-6 fixed top-0 left-0 right-0 z-20"
  const linkListClasses = "hidden md:flex gap-x-4 md:ml-12 z-20"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <Dropdown links={links} isOpen={isDropdownOpen} />

      <nav className={navClasses}>
        <h2 className="text-white">{brandName}</h2>

        <ul className={linkListClasses}>
          {links.map((link) => (
            <li key={link.to}>
              <Button to={link.to} variant="anchor" className="text-white">
                {link.label}
              </Button>
            </li>
          ))}
        </ul>

        {dropdownIconSrc && (
          <button
            onClick={toggleDropdown}
            className="md:hidden z-20 p-2 hover:cursor-pointer hover:opacity-75 "
            aria-label="Toggle menu"
          >
            <img src={dropdownIconSrc} alt="Dropdown" className={`h-full transition-all duration-200 ${isDropdownOpen ? "rotate-90" : ""}`} />
          </button>
        )}
      </nav>
    </>
  )
}
