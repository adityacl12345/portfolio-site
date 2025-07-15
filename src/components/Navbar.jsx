import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-zinc-800 shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold text-zinc-800 dark:text-white"
        >
          Aditya Ghosh
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm ${
              location.pathname === "/" ? "font-semibold" : ""
            } text-zinc-700 dark:text-zinc-300 hover:underline`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`text-sm ${
              location.pathname === "/projects" ? "font-semibold" : ""
            } text-zinc-700 dark:text-zinc-300 hover:underline`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
