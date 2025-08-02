import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import mediaItems from "../data/mediaItems";

const Art = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const arts = mediaItems.filter((item) => item.type === 'painting');
  const photos = mediaItems.filter((item) => item.type === 'photo');
  
  return (
    <div className="px-6 md:px-20 py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10 text-center uppercase">
        Art & Photography
      </h2>

      {/* Media Grid */}
      {/* Painting Section */}
      <h3 className="text-2xl text-center font-semibold text-zinc-700 dark:text-zinc-100 mb-6">Paintings</h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arts.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => setSelected(item)}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
            </div>
            <p className="mt-2 text-center text-zinc-700 dark:text-zinc-200 text-sm">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-zinc-200 dark:to-transparent opacity-50" />

      {/* Photo Section */}
      <h3 className="text-2xl text-center font-semibold text-zinc-700 dark:text-zinc-100 mb-6">Photograpy</h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((item, idx) => (
          <div
            key={idx}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => setSelected(item)}
          >
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-60 object-cover"
              />
            </div>
            <p className="mt-2 text-center text-zinc-700 dark:text-zinc-200 text-sm">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-amber-200/20 dark:bg-zinc-800/90 px-4">
          <div className="relative max-w-5xl md:max-w-7xl w-full">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-[-50px] mx-auto left-0 right-0 w-[40px] p-2 rounded-4xl bg-zinc-700 text-white text-2xl hover:text-red-400"
            >
                <RxCross2 />
            </button>
            <img
              src={selected.src}
              alt={selected.caption}
              className="w-full max-h-[80vh] object-contain rounded-md shadow-lg"
            />
            <p className="mt-4 text-center text-white">{selected.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
