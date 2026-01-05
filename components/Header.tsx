"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 
      bg-white 
      ${isScrolled ? "shadow-md" : "shadow-none"}
    `}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h2 className="text-2xl font-extrabold text-[#fa343a]">Yard.</h2>
          </Link>
        </div>

        <a
          href="https://wa.me/2348116074956"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white animate-spin bg-[#fa343a] hover:bg-[#e30a11] w-10 h-10 rounded-full text-sm font-medium shadow-sm hover:shadow-md flex justify-center items-center gap-2"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </nav>
  );
}

export default Header;
