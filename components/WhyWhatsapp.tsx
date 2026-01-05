export default function WhyWhatsApp() {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Why <span className="text-[#0F9D58]">WhatsApp?</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Motion brings all your daily tasks into one chat. Here's why WhatsApp
          makes it effortless.
        </p>

        {/* Features */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Chat Instantly */}
          <div className="flex flex-col items-center text-center bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200 hover:border-[#0F9D58] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#0F9D58] text-white rounded-full text-2xl font-bold">
              💬
            </div>
            <h3 className="text-xl font-semibold mt-4">Chat Instantly</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Book rides, order food, send parcels, and shop for groceries
              instantly — no app downloads required.
            </p>
          </div>

          {/* Anywhere, Anytime */}
          <div className="flex flex-col items-center text-center bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200 hover:border-[#0F9D58] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#0F9D58] text-white rounded-full text-2xl font-bold">
              🌍
            </div>
            <h3 className="text-xl font-semibold mt-4">Anywhere, Anytime</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Motion works wherever WhatsApp is available, so you can get things
              done on the go.
            </p>
          </div>

          {/* Fast & Reliable */}
          <div className="flex flex-col items-center text-center bg-[#F9FAFB] p-6 rounded-2xl border border-gray-200 hover:border-[#0F9D58] transition shadow-sm hover:shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-[#0F9D58] text-white rounded-full text-2xl font-bold">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mt-4">Fast & Reliable</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Get instant confirmations for rides, deliveries, and orders — all
              through a simple chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
