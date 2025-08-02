import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../shared/ThemeToggle";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blogs", label: "Blogs" }
  ]

  const getLinkClasses = (path) => 
    `relative group text-md font-semibold transition duration-300 ${
      location.pathname === path
        ? "font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
        : "text-zinc-700 dark:text-zinc-300"
    }`;

  const underlineSpan = (
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
  );

  return (
    <nav className="bg-white dark:bg-zinc-800 drop-shadow-xl px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="block"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent tracking-tight select-none">
            Adi ঘোষ
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={getLinkClasses(link.path)}>
              {link.label}
              {underlineSpan}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
          {isMenuOpen && (
          <motion.div 
            key="dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sm:hidden mt-3 px-6 py-3 bg-white dark:bg-zinc-900 rounded-md shadow space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)} // close on click
                className={`block max-w-fit text-md font-medium ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                    : "text-zinc-800 dark:text-zinc-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
