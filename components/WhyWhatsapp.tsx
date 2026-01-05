export default function WhyWhatsApp() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Why <span className="text-[#fa343a]">WhatsApp?</span>
        </h2>
        <p className="text-center text-gray-300 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Your next home is just a message away. Here’s why using WhatsApp makes
          it effortless.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#fa343a] text-white rounded-full text-2xl font-bold">
              💬
            </div>
            <h3 className="text-xl font-semibold mt-4">Chat Instantly</h3>
            <p className="text-gray-400 mt-2 text-sm">
              No app downloads. Send a message and start your search
              immediately.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#fa343a] text-white rounded-full text-2xl font-bold">
              🌍
            </div>
            <h3 className="text-xl font-semibold mt-4">Anywhere, Anytime</h3>
            <p className="text-gray-400 mt-2 text-sm">
              WhatsApp works globally on all devices, so you can find houses
              wherever you are.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-[#1a1a1a] p-6 rounded-2xl border border-[#fa343a25] hover:border-[#fa343a] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#fa343a] text-white rounded-full text-2xl font-bold">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mt-4">Fast & Reliable</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Get instant results from our AI agent without waiting for a human
              agent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
