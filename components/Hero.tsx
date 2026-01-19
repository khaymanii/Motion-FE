"use client";

import { FaWhatsapp } from "react-icons/fa6";

function Hero() {
  return (
    <section className="w-full bg-white text-gray-900 pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Simplifying
            <br />
            <span className="text-[#0F9D58]">Everyday Movement</span>
          </h1>

          <p className="text-gray-600 mt-5 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
            Book rides, order food, send parcels, and shop for groceries — all
            through a simple WhatsApp chat. No apps. No stress. Just motion.
          </p>

          <a
            href="https://wa.me/2348051106168"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto mt-7 bg-[#0F9D58] text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold 
            hover:bg-[#0B6E3F] transition shadow-sm hover:shadow-lg flex justify-center items-center gap-2"
          >
            Start on WhatsApp
            <FaWhatsapp size={26} />
          </a>
        </div>

        {/* Right Mock Chat */}
        <div className="flex justify-center w-full md:w-auto">
          <div className="w-full max-w-sm sm:max-w-md bg-[#F9FAFB] rounded-2xl p-5 sm:p-6 shadow-xl border border-gray-200">
            <p className="text-gray-500 text-xs sm:text-sm">
              Example Conversation
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-[#0F9D58] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “I need a ride from Yaba to Lekki.”
              </div>

              <div className="bg-white border p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Sure 🚗 Which service would you like to use — Uber, Bolt, or
                inDrive?”
              </div>

              <div className="bg-[#0F9D58] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Bolt.”
              </div>

              <div className="bg-white border p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “🚘 Driver found! Ibrahim is 4 minutes away. Estimated fare:
                ₦1,800.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
