import Button from "./Button"
import Dropdown from "./Dropdown"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    "flex items-center justify-between md:justify-start bg-transparent py-2 h-32 px-6 fixed top-0 left-0 right-0 z-30"
  const linkListClasses = "hidden md:flex gap-x-4 md:ml-12"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Dropdown links={links} isOpen={isDropdownOpen} toggle={() => setIsDropdownOpen(false)} />

      <nav className={navClasses}>
        <h2 onClick={() => {navigate("/"); setIsDropdownOpen(false)}} className="text-white hover:cursor-pointer hover:opacity-50 transition-all duration-200">{brandName}</h2>

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
            className="md:hidden p-2 hover:cursor-pointer hover:opacity-75 "
            aria-label="Toggle menu"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={dropdownIconSrc} alt="Dropdown" className={`h-full transition-all duration-200 ${isDropdownOpen ? "rotate-90" : ""}`} />
          </button>
        )}
      </nav>
    </>
  )
}
