import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { senderName, subject, message },
        { withCredentials: true }
      );

      toast.success(data.message);

      setSenderName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="relative px-4 sm:px-6 md:px-10 lg:px-24 py-14 sm:py-20 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-indigo-500/20 blur-3xl rounded-full top-10 left-0"></div>

      <div className="absolute w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-0"></div>

      {/* HEADING */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 sm:mb-14">

        <div className="h-[2px] w-8 sm:w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CONTACT ME
          </span>
        </h1>

        <div className="h-[2px] w-8 sm:w-20 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>

      </div>

      {/* FORM CARD */}
      <div className="w-full max-w-3xl mx-auto backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition duration-300">

        <form onSubmit={handleMessage} className="flex flex-col gap-5 sm:gap-6">

          {/* NAME */}
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-white/70 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* SUBJECT */}
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-white/70 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* MESSAGE */}
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message..."
            className="w-full min-h-[140px] px-4 py-3 text-sm sm:text-base rounded-xl bg-white/70 dark:bg-white/10 border border-gray-300 dark:border-white/10 outline-none focus:ring-2 focus:ring-pink-500 transition resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-fit sm:min-w-[220px] mx-auto px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;