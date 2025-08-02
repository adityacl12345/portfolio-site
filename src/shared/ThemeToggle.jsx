import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!localStorage.theme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-2">
      <Sun size={18} className={`text-yellow-500 ${!isDark ? "opacity-100" : "opacity-80"}`} />
      <button
        onClick={() => setIsDark(!isDark)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 hover:cursor-pointer ${
          isDark ? "bg-zinc-700" : "bg-yellow-500"
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-zinc-200 shadow transition-transform duration-300 ${
            isDark ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <Moon size={18} className={`text-zinc-800 dark:text-zinc-200 ${isDark ? "opacity-100" : "opacity-80"}`} />
    </div>
  );
}
