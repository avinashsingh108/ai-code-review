import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClasses = ({ isActive }) =>
    `px-4 py-1 rounded-lg transition-colors duration-300  ${
      isActive ? "bg-white text-black" : "text-white transition-transform duration-300 ease-in-out hover:scale-105"
    }`;
  return (
    <header className="bg-black/20 backdrop-blur text-white shadow fixed top-0 left-0 right-0 z-50 lg:px-20 xl:px-40">
      <div className="relative z-40 mx-auto sm:px-4 py-4 flex justify-between px-3 items-center ">
        <div className="flex items-center justify-center gap-2">
          <NavLink to="/" className="text-2xl font-semibold ">
            CodeInsight AI
          </NavLink>
        </div>

        <nav className="hidden md:flex space-x-10 text-base items-center h-fit">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={navLinkClasses}>
            Blogs
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl cursor-pointer" />
            ) : (
              <FiMenu className="text-2xl cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-neutral-950 min-h-screen absolute inset-0 z-10 w-full">
          <ul className="flex flex-col items-center space-y-10 text-xl p-4 pt-32">
            <li>
              <NavLink to="/" onClick={toggleMenu} className={navLinkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                onClick={toggleMenu}
                className={navLinkClasses}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={navLinkClasses}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
