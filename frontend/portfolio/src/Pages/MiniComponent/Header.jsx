import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ModeToggle from "../../components/ModeToggle";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "#home" },
    { name: "Timeline", path: "#timeline" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#project" },
    { name: "Apps", path: "#myapps" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black tracking-wider"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              DIVYA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">

            {links.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="relative text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition duration-300 group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-4">

            <ModeToggle />

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-white dark:bg-zinc-950 px-6 py-5">

          <div className="flex flex-col gap-5">

            {links.map((item, index) => (
              <a
                key={index}
                href={item.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2">
              <ModeToggle />
            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default Header;