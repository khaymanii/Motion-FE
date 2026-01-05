export default function Features() {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Powerful <span className="text-[#fa343a]">Features</span> for Renters
        </h2>
        <p className="text-center text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Everything you need to find your next home — fast, simple, and all
          inside WhatsApp.
        </p>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              🔍
            </div>
            <h3 className="text-lg font-semibold mt-4">Smart AI Search</h3>
            <p className="text-gray-600 text-sm mt-2">
              Tell the bot your location, budget, and house type. It instantly
              finds the best available matches.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              🏠
            </div>
            <h3 className="text-lg font-semibold mt-4">Verified Listings</h3>
            <p className="text-gray-600 text-sm mt-2">
              All homes come with photos, prices, details, and clear
              descriptions, so you always know what to expect.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              📍
            </div>
            <h3 className="text-lg font-semibold mt-4">Location Sharing</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get exact map locations for any house and decide if the area works
              for you before visiting.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              ⚡
            </div>
            <h3 className="text-lg font-semibold mt-4">Instant Results</h3>
            <p className="text-gray-600 text-sm mt-2">
              No waiting for agents. Listings appear immediately based on your
              preferences and location.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              🛋️
            </div>
            <h3 className="text-lg font-semibold mt-4">Full House Details</h3>
            <p className="text-gray-600 text-sm mt-2">
              View photos, interior details, pricing, and available amenities —
              all inside WhatsApp.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#fa343a] text-white rounded-xl text-xl font-bold">
              🤖
            </div>
            <h3 className="text-lg font-semibold mt-4">AI Chat Convenience</h3>
            <p className="text-gray-600 text-sm mt-2">
              No app downloads. Just message the bot anytime and get real-time
              assistance like chatting with a human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
