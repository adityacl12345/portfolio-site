import { Link } from "react-router-dom";

export default function ProjectCard({
  name,
  description,
  tech,
  liveLink,
  githubLink,
}) {
    return (
    <div className="relative bg-white group/card dark:bg-zinc-800/40 rounded-xl shadow-md p-6 hover:scale-[1.05] duration-300 border-gray-600 border-1 flex flex-col">
      <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2 group-hover/card:bg-gradient-to-r from-red-500 to-yellow-500 group-hover/card:bg-clip-text group-hover/card:text-transparent">{name}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, idx) => (
          <span
            key={idx}
            className="text-xs bg-zinc-100 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-200 px-2 py-1 rounded"
          >
            {techItem}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        {liveLink && (
          <Link
            to={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/link text-sm text-gray-200 hover:cursor-pointer "
          >
            🔗 Live
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
        )}
        {githubLink && (
          <Link
            to={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/link text-sm text-gray-200 hover:cursor-pointer "
          >
            🐙 GitHub
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
        )}
      </div>
    </div>
  );
}