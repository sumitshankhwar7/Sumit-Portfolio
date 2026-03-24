import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Sumit shankhwar
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-300">
            <a href="#Home">
              <li className="hover:text-white cursor-pointer">Home</li>
            </a>
            <a href="#About">
              <li className="hover:text-white cursor-pointer">About</li>
            </a>
            <a href="#Experience">
              <li className="hover:text-white cursor-pointer">Expirence</li>
            </a>

            <a href="#Projects">
              <li className="hover:text-white cursor-pointer">Projects</li>
            </a>
            <a href="#Contact">
              <li className="hover:text-white cursor-pointer">Contact</li>
            </a>
          </ul>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        {/* <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={26} />
          </button>
        </div> */}

        {/* Menu Links */}
        <ul className="flex flex-col gap-6 p-6 text-gray-300">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Expirence</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
};

export default Navbar;
