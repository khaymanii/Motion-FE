export default function Features() {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Everything You Need to <span className="text-[#0F9D58]">Move</span>
        </h2>

        <p className="text-center text-gray-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Motion brings rides, food ordering, parcel delivery, and groceries
          into one simple WhatsApp experience.
        </p>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              🚗
            </div>
            <h3 className="text-lg font-semibold mt-4">Ride Booking</h3>
            <p className="text-gray-600 text-sm mt-2">
              Book nearby rides instantly on WhatsApp. See driver details,
              estimated arrival time, and trip cost before confirming.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              🍔
            </div>
            <h3 className="text-lg font-semibold mt-4">Food Ordering</h3>
            <p className="text-gray-600 text-sm mt-2">
              Order meals from nearby restaurants, browse menus, and track
              delivery — all without installing another app.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              📦
            </div>
            <h3 className="text-lg font-semibold mt-4">Parcel Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Send packages across the city with real-time tracking, delivery
              estimates, and instant confirmation.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              🛒
            </div>
            <h3 className="text-lg font-semibold mt-4">Grocery Ordering</h3>
            <p className="text-gray-600 text-sm mt-2">
              Shop groceries from nearby stores, choose delivery times, and get
              updates straight in your chat.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              📍
            </div>
            <h3 className="text-lg font-semibold mt-4">Live Tracking</h3>
            <p className="text-gray-600 text-sm mt-2">
              Track rides, food, and deliveries in real time with live location
              updates directly inside WhatsApp.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="border border-gray-200 p-7 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center bg-[#0F9D58] text-white rounded-xl text-xl font-bold">
              🤖
            </div>
            <h3 className="text-lg font-semibold mt-4">One Smart Chat</h3>
            <p className="text-gray-600 text-sm mt-2">
              No downloads, no switching apps. One AI-powered WhatsApp bot that
              handles all your everyday movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
