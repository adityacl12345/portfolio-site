export default function BlogModal({ blog, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl bg-red-600 text-white rounded-full w-8 h-8"
        >
          ✕
        </button>
        <img src={blog.imageUrl} alt={blog.title} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-bold">{blog.title}</h2>
          <p className="text-sm text-zinc-500">{new Date(blog.createdAt?.seconds * 1000).toLocaleString()} | {blog.location}</p>
          <hr className="border-zinc-200 dark:border-zinc-700" />
          <p className="whitespace-pre-wrap text-zinc-700 dark:text-zinc-200">{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
