
"use client";
export default function ContactForm() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">

      {/* === SPARKLE BACKGROUND === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 opacity-20 blur-2xl rounded-full animate-glow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-600 opacity-30 blur-3xl rounded-full animate-glow delay-1000" />

        {/* Sparkle Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full blur-sm animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* === CONTACT FORM === */}
      <div className="relative z-10 w-full max-w-xl p-10 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl animate-fadeInUp">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8 tracking-tight">
          🌠 Contact Us
        </h2>
        <form className="space-y-6 text-white">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-white/70 text-gray-900 focus:outline-none focus:ring-4 focus:ring-pink-400 shadow-inner"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-xl bg-white/70 text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-inner"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-xl bg-white/70 text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-400 shadow-inner"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition duration-300 hover:shadow-2xl"
          >
            ✨ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
