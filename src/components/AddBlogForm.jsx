// src/components/AddBlogForm.jsx
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // Make sure this is your firebase config file

const AddBlogForm = ({ onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "Tech",
    location: "",
    imageUrl: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "blogs"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSuccessMsg("✅ Blog added successfully!");
      setFormData({
        title: "",
        description: "",
        type: "Tech",
        location: "",
        imageUrl: "",
        content: "",
      });

      onBlogAdded?.(); // Notify parent
    } catch (err) {
      console.error("Error adding blog:", err);
      setSuccessMsg("❌ Error adding blog.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md mb-10 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">Add New Blog</h2>

      <div className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        />

        <input
          type="text"
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        >
          <option value="Tech">Tech</option>
          <option value="Art">Art</option>
          <option value="Travel">Travel</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          required
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        />

        <textarea
          name="content"
          placeholder="Blog Content"
          value={formData.content}
          onChange={handleChange}
          rows={6}
          required
          className="p-2 rounded bg-zinc-100 dark:bg-zinc-700 dark:text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          {loading ? "Adding..." : "Add Blog"}
        </button>

        {successMsg && (
          <p className="text-sm text-green-500 dark:text-green-400 mt-2">
            {successMsg}
          </p>
        )}
      </div>
    </form>
  );
};

export default AddBlogForm;
