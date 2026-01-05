export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Loved by Renters <span className="text-[#fa343a]">Everywhere</span>
        </h2>
        <p className="text-center text-gray-300 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Thousands of people trust WhatsApp to find their next home — quick,
          simple, and stress-free.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-[#fa343a20] hover:border-[#fa343a] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Sarah Johnson</h3>
                <p className="text-gray-400 text-xs">Toronto, Canada</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              “I found an apartment in less than 10 minutes. The bot gave me
              three options within my budget — this is the future of renting.”
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-[#fa343a20] hover:border-[#fa343a] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5pZ2VyaWFuJTIwbWFufGVufDB8fDB8fHww"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Adekunle Martins</h3>
                <p className="text-gray-400 text-xs">Lagos, Nigeria</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              “No more agents stressing me. Just WhatsApp. I searched for Yaba
              and got accurate listings instantly. Too smooth!”
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-[#fa343a20] hover:border-[#fa343a] transition">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">Maria Lopez</h3>
                <p className="text-gray-400 text-xs">Madrid, Spain</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              “I moved to Spain this year — finding a home was scary. But this
              WhatsApp AI made it unbelievably easy.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
