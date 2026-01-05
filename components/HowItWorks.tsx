export default function HowItWorks() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          How <span className="text-[#fa343a]">It Works</span>
        </h2>
        <p className="text-center text-gray-300 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Finding your next home has never been this simple. Just chat with our
          AI agent on WhatsApp.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              1
            </div>

            <h3 className="text-xl font-semibold mt-4">Start a Chat</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Message our WhatsApp bot and tell it what kind of house you want —
              location, budget, and apartment type.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              2
            </div>

            <h3 className="text-xl font-semibold mt-4">Get Instant Matches</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              The AI searches available listings near you and sends options with
              price, photos, and full details.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-7 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              3
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Visit or Secure the House
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Choose a house you like, get the exact location, and schedule a
              visit — all inside WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
