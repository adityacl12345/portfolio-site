import { useState } from "react";
import AddBlogForm from "../components/AddBlogForm";
import BlogList from "../components/BlogList";
import { FaPlus } from "react-icons/fa";

export default function BlogPage() {
    const [showForm, setShowForm] = useState(false);
    const handleToggleForm = () => {
        setShowForm((prev) => !prev);
    }
    return (
        <div className="min-h-screen p-6 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-200">
            <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10 text-center uppercase">My Blogs</h1>

            <div className="flex justify-center mb-6">
                <button
                onClick={handleToggleForm}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow"
                >
                <FaPlus />
                Add Blog
                </button>
            </div>

            {showForm && <AddBlogForm />}
            <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-zinc-200 dark:to-transparent opacity-50" />
            <BlogList />
        </div>
    );
}
