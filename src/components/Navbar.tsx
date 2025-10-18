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
    "flex items-center justify-between md:justify-start bg-transparent py-2 h-20 px-4 md:px-12 border-b-2 border-white"
  const linkListClasses = "hidden md:flex gap-x-4 md:ml-16 z-10"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <Dropdown links={links} isOpen={isDropdownOpen} />

      <nav className={navClasses}>
        <h1>{brandName}</h1>

        <ul className={linkListClasses}>
          {links.map((link) => (
            <li key={link.to}>
              <Button to={link.to} variant="anchor">
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
