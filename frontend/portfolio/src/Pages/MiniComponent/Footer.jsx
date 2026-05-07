import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-20 w-full">

      {/* glow background */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-white/20 to-transparent mb-8"></div>

        {/* content */}
        <div className="flex flex-col items-center text-center gap-4">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-widest">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Thanks For Scrolling
            </span>
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Built with React, Node.js & passion. Keep learning, keep building 🚀
          </p>

          {/* social icons */}
          <div className="flex gap-5 mt-4">

            <a
              href="https://wa.me/918521573255"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500/20 flex items-center justify-center transition"
            >
              📱
            </a>

            <a
              href="tel:+918521573255"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-indigo-500/20 flex items-center justify-center transition"
            >
              ☎️
            </a>

          </div>

          {/* phone number */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Contact: 8521573255
          </p>

          {/* copyright */}
          <p className="text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;