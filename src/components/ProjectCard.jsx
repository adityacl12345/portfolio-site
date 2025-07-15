export default function ProjectCard({
  name,
  description,
  tech,
  liveLink,
  githubLink,
}) {
    return (
    <div className="bg-white dark:bg-zinc-800/40 rounded-xl shadow-md p-6 group hover:scale-[1.1] duration-300 cursor-pointer border-gray-600 border-1">
      <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">{name}</h3>
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
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-200 hover:underline"
          >
            🔗 Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 dark:text-zinc-300 hover:underline"
          >
            🐙 GitHub
          </a>
        )}
      </div>
    </div>
  );
}