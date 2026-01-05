export default function HowItWorks() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          How <span className="text-[#0F9D58]">Motion</span> Works
        </h2>

        <p className="text-center text-gray-300 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          One WhatsApp chat to move around, order food, send packages, or shop
          for groceries — fast, simple, and stress-free.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#99fccc] hover:border-[#0F9D58] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              1
            </div>

            <h3 className="text-xl font-semibold mt-4">Start a Chat</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Open WhatsApp and tell Motion what you need — a ride, food
              delivery, parcel drop-off, or groceries.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#99fccc] hover:border-[#0F9D58] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              2
            </div>

            <h3 className="text-xl font-semibold mt-4">Choose Your Option</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Motion shows you available options — nearby drivers, restaurants,
              stores, or delivery estimates — all inside the chat.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#99fccc] hover:border-[#0F9D58] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              3
            </div>

            <h3 className="text-xl font-semibold mt-4">Track & Complete</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Track your ride, food, or delivery in real time and complete
              payments seamlessly — no extra apps needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
