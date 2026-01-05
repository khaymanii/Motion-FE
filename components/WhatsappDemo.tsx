"use client";

export default function WhatsAppDemo() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text / Description */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Your Next Home <span className="text-[#fa343a]">On WhatsApp</span>
          </h2>
          <p className="text-gray-300 mt-4 text-sm md:text-base max-w-md">
            Chat with our AI-powered agent, get instant listings near you, see
            prices, photos, and even map locations — all without downloading an
            app.
          </p>

          <a
            href="https://wa.me/2348116074956"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#fa343a] text-white px-6 py-3 rounded-xl text-sm md:text-base font-semibold hover:bg-[#e30a11] transition shadow-sm hover:shadow-lg"
          >
            Try on WhatsApp
          </a>
        </div>

        {/* WhatsApp Mockup Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md bg-[#1a1a1a] rounded-3xl p-6 shadow-xl border border-[#fa343a25]">
            <p className="text-gray-400 text-xs sm:text-sm mb-2">
              WhatsApp Chat Demo
            </p>

            <div className="space-y-3">
              <div className="bg-[#fa343a] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Hi, I want a 2-bedroom flat in Ikoyi under 2M.”
              </div>

              <div className="bg-[#222] p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Found 3 options near you:
                <br />• Osborne — ₦1.8M
                <br />• Old Ikoyi — ₦1.9M
                <br />• Parkview — ₦2M
                <br />
                Want photos?”
              </div>

              <div className="bg-[#fa343a] text-white p-3 rounded-xl w-fit text-xs sm:text-sm shadow">
                “Yes, send the nearest one.”
              </div>

              <div className="bg-[#222] p-3 rounded-xl text-xs sm:text-sm w-fit ml-auto shadow">
                “Here’s the map location and photos 🚀”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
