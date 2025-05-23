import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import logoimg from '../assets/images/f.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about' },
  { name: 'Projects', path: '/projects' }
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleLogoClick = () => {
      closeMobileMenu();
      scrollToTop();
  };

  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out block sm:inline-block";
  const activeLinkClasses = "bg-gray-700/70 text-white";
  const inactiveLinkClasses = "text-gray-300 hover:bg-gray-700/50 hover:text-white";

  return (
    <nav className="shadow-md sticky top-0 z-50 backdrop-blur-sm bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Link
                to="/"
                className="block hover:opacity-80 transition-opacity duration-300"
                onClick={handleLogoClick}
                aria-label="Ir a la página de inicio"
            >
             <img
                src= {logoimg}
                alt="Logo del Portfolio - Ir al inicio"
                className="w-[34px] h-[34px]"
             />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                 className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      <div
         className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-sm bg-gray-800/80 ${isMobileMenuOpen ? 'max-h-96 border-t border-gray-700/50' : 'max-h-0 border-t border-transparent'}`}
         id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
               className={({ isActive }) =>
                `block ${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;