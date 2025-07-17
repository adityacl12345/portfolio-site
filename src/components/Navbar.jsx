import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="bg-white dark:bg-zinc-800 shadow px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="block"
        >
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent tracking-tight select-none">
            Adi ঘোষ
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`relative group text-sm transition duration-300 ${
              location.pathname === "/"
                ? "font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                : "text-zinc-700 dark:text-zinc-300"
            }`}
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/projects"
            className={`relative group text-sm transition duration-300 ${
              location.pathname === "/projects"
                ? "font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                : "text-zinc-700 dark:text-zinc-300"
            }`}
          >
            Projects
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/gallery"
            className={`relative group text-sm transition duration-300 ${
              location.pathname === "/gallery"
                ? "font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                : "text-zinc-700 dark:text-zinc-300"
            }`}
          >
            Gallery
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
