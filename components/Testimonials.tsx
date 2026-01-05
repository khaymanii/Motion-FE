export default function Testimonials() {
  return (
    <section className="w-full bg-white text-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Loved by <span className="text-[#0F9D58]">Everyone</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Thousands of people trust Motion on WhatsApp to get things moving —
          rides, food, parcels, and groceries, all fast and simple.
        </p>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0F9D58] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Sarah Johnson</h3>
                <p className="text-gray-500 text-xs">Toronto, Canada</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              “I ordered food and booked a ride within minutes — all on
              WhatsApp. Motion made my day so easy!”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0F9D58] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Adekunle Martins</h3>
                <p className="text-gray-500 text-xs">Lagos, Nigeria</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              “No more juggling apps! I booked a ride and got groceries
              delivered instantly — all in one chat.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-md border border-gray-200 hover:border-[#0F9D58] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Maria Lopez</h3>
                <p className="text-gray-500 text-xs">Madrid, Spain</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-4 leading-relaxed">
              “Motion on WhatsApp is a game changer — I can send parcels, book
              rides, and order meals without leaving my chat.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
