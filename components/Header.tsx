"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/">
          <h2 className="text-2xl font-extrabold text-[#0F9D58]">motion</h2>
        </Link>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/2348051106168"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-11 h-11 rounded-full 
          bg-[#0F9D58] hover:bg-[#0B6E3F] 
          text-white shadow-sm hover:shadow-md 
          transition-all duration-200"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>
    </nav>
  );
}

export default Header;
