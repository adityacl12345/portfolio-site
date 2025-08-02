import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLink } from "react-icons/fa";

export default function ProjectCard({
  name,
  description,
  tech,
  liveLink,
  githubLink,
  featured
}) {

    const cardRef = useRef(null);
    const requestRef = useRef();
    const [coords, setCoords] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        const rect = cardRef.current.getBoundingClientRect();
        setCoords({
          x: e.clientX - rect.left,
          y:e.clientY - rect.top,
        });
        requestRef.current = null;
      });
    }
    return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white group/card dark:bg-zinc-800/40 rounded-xl shadow-md p-6 hover:scale-[1.05] duration-300 border-gray-600 border-1 flex flex-col"
    >
      {/* Hover gradient trail */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255, 107, 129, 0.15), transparent 60%)`,
        }}
      />
      {featured && <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 clip-triangle pointer-events-none opacity-80" />}
      <h3 className="text-xl max-w-fit font-semibold text-zinc-800 dark:text-white mb-2 group-hover/card:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover/card:bg-clip-text group-hover/card:text-transparent">{name}</h3>
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
            className="relative group/link text-sm text-zinc-800 dark:text-zinc-200 hover:cursor-pointer flex items-center gap-1"
          >
            <FaLink size={12} className="inline" /> Live
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
        )}
        {githubLink && (
          <Link
            to={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/link text-sm text-zinc-800 dark:text-zinc-200 hover:cursor-pointer flex items-center gap-1"
          >
            <FaGithub size={16} className="inline" /> GitHub
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
        )}
      </div>
    </div>
  );
}