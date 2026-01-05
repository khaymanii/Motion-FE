import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-14 border-t border-[#0F9D5825]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#0F9D58]">motion</h2>

            <p className="text-gray-400 mt-3 max-w-sm text-sm">
              Your all-in-one assistant on WhatsApp — book rides, order food,
              send parcels, and get groceries delivered, all in one chat.
            </p>

            <div className="flex items-center gap-4 mt-5">
              {/* Twitter */}
              <Link
                href="#"
                className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#0F9D58] transition"
              >
                <FaXTwitter size={20} />
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#0F9D58] transition"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-white text-lg">Start Moving</h3>
            <p className="text-gray-400 text-sm mt-3 max-w-xs">
              Chat with Motion on WhatsApp and book rides, order food, send
              parcels, or get groceries delivered instantly.
            </p>

            <a
              href="https://wa.me/2348116074956"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#0F9D58] text-white px-5 py-3 rounded-xl text-sm font-semibold 
              hover:bg-[#0B6E3F] transition shadow-sm hover:shadow-lg"
            >
              Talk To Motion on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-[#0F9D5825] pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Motion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
