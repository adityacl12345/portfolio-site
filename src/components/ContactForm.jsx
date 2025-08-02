import { useEffect, useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/xwpqqjjg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
      setMessage({ text: "✅ Thanks! Your message has been sent.", type: "success" });
    } else {
      setStatus("error");
      setMessage({ text: "❌ Oops! Something went wrong. Please try again.", type: "error" });
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white dark:bg-zinc-800 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">
        Contact Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white"
        ></textarea>

        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded shadow hover:opacity-90 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {message && (
          <p
            className={`mt-2 text-sm font-medium ${
              message.type === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
