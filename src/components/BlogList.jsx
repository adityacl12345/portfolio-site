import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
