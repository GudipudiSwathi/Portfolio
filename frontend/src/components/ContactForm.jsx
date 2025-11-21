import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-8 pt-10 pb-20 min-h-screen">
      <h2 className="text-4xl font-extrabold text-lavender-400 text-center">
        Contact Me
      </h2>
      <div className="w-24 h-2 bg-peach-300 rounded-full mx-auto mt-2 mb-6"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-soft-lg p-10 border-l-8 border-peach-300"
      >
        {/* SUCCESS MESSAGE */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-peach-300 text-white font-semibold mb-6 p-3 rounded-xl text-center shadow-lg"
          >
            Message sent successfully! 💜
          </motion.div>
        )}

        {/* ERROR MESSAGE */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-400 text-white font-semibold mb-6 p-3 rounded-xl text-center shadow-lg"
          >
            {error}
          </motion.div>
        )}

        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-neutral-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-lavender-300 outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-neutral-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-lavender-300 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-neutral-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-3 h-32 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-lavender-300 outline-none resize-none"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-peach-300 text-white font-semibold rounded-full shadow-soft-lg hover:opacity-90 transition w-fit disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
