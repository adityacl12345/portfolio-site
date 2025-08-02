import { useState, useRef } from "react";
import BlogModal from "./BlogModal";

export default function BlogCard({ blog }) {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-white group/card dark:bg-zinc-800/40 rounded-xl shadow-md p-6 hover:scale-[1.05] duration-300 border-gray-600 border-1 flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(255, 107, 129, 0.15), transparent 60%)`,
          }}
        />
        <div className="relative">
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            {blog.type}
          </span>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold">{blog.title}</h2>
          <p className="text-sm text-zinc-500 line-clamp-2">{blog.description}</p>
        </div>
      </div>

      {isOpen && <BlogModal blog={blog} onClose={() => setIsOpen(false)} />}
    </>
  );
}
