"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppDemo() {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text / Description */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Get Things Moving <br />
            <span className="text-[#0F9D58]">On WhatsApp</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            Book rides, order food, send parcels, and shop for groceries — all
            through a simple WhatsApp chat. Fast, convenient, and no apps
            required.
          </p>

          <a
            href="https://wa.me/2348116074956"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-[#0F9D58] w-60 text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-[#0B6E3F] transition shadow-sm hover:shadow-lg flex items-center gap-2 text-center"
          >
            Start on WhatsApp
            <FaWhatsapp size={22} />
          </a>
        </div>

        {/* WhatsApp Mockup Chat */}
        <div className="flex-1 flex justify-center w-full md:w-auto">
          <div className="w-full max-w-sm md:max-w-md bg-[#F9FAFB] rounded-3xl p-6 shadow-xl border border-gray-200">
            <p className="text-gray-500 text-xs sm:text-sm mb-2">
              WhatsApp Chat Demo
            </p>

            <div className="space-y-3">
              <div className="bg-[#0F9D58] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Hi, I need a ride from Yaba to Lekki.”
              </div>

              <div className="bg-white border p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Got it 🚗 Which service would you like to use — Bolt, Uber, or
                inDrive?”
              </div>

              <div className="bg-[#0F9D58] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Bolt please.”
              </div>

              <div className="bg-white border p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Driver Ibrahim is 4 minutes away. Estimated fare: ₦1,800.”
              </div>

              <div className="bg-[#0F9D58] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Also, order 2 burgers from Chicken Republic.”
              </div>

              <div className="bg-white border p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “🍔 2 burgers added to your order. Delivery expected in 25
                minutes.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
