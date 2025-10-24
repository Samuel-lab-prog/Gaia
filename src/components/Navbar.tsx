import Button from './Button';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<
    'up' | 'down' | null
  >('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) setScrollDirection('down');
      else if (currentScrollY < lastScrollY) setScrollDirection('up');
      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses =
    'flex items-center justify-between bg-black/30 border-b-2 backdrop-blur-xs md:justify-start h-20 border-white/10 px-6 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out' +
    (scrollDirection === 'down'
      ? ' translate-y-[-100%]'
      : 'translate-y-0');
  const linkListClasses = 'hidden md:flex gap-x-4 md:ml-12 mt-3';
  const navigate = useNavigate();
  return (
    <>
      <Dropdown
        links={links}
        isOpen={isDropdownOpen}
        toggle={() => setIsDropdownOpen(false)}
      />

      <nav className={navClasses}>
        <h2
          onClick={() => {
            navigate('/');
            setIsDropdownOpen(false);
            window.scrollTo({
              top:0,
              left:0,
              behavior: 'smooth'
            })
          }}
          className="text-white hover:cursor-pointer hover:opacity-50 transition-all duration-200"
        >
          {brandName}
        </h2>

        <ul className={linkListClasses}>
          {links.map((link) => (
            <li key={link.to} onClick={()=>{
              window.scrollTo({
              top:0,
              left:0,
              behavior: 'smooth'
            })
            }}>
              <Button
                to={link.to}
                variant="anchor"
                className="text-white flex"
              >
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
            <img
              src={dropdownIconSrc}
              alt="Dropdown"
              className={`h-full transition-all duration-200 ${isDropdownOpen ? 'rotate-90' : ''}`}
            />
          </button>
        )}
      </nav>
    </>
  );
}
