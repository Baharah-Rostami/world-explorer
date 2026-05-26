export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[5px] text-cyan-300 text-sm mb-5">
            About The Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Explore The World
            <span className="block text-zinc-500">
              With Modern Design
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg leading-8 max-w-3xl">
            World Explorer is a modern web application built with
            Next.js and Tailwind CSS that allows users to discover
            countries, search detailed information, filter regions,
            and explore the world through an immersive user experience
            powered by the REST Countries API.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-[30px] border border-white/10 bg-white/4 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl mb-6">
              🌍
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Discover Countries
            </h2>

            <p className="text-zinc-400 leading-7">
              Explore countries from all around the world with
              detailed information including capitals, populations,
              regions, and more.
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/4 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-linea-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl mb-6">
              🔎
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Smart Search
            </h2>

            <p className="text-zinc-400 leading-7">
              Instantly search and filter countries by name or region
              with a smooth and responsive modern interface.
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/4 backdrop-blur-xl p-8 hover:border-cyan-400/30 transition duration-500">

            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Built With Next.js
            </h2>

            <p className="text-zinc-400 leading-7">
              Developed using modern technologies including Next.js,
              React, and Tailwind CSS for high performance and
              beautiful user experience.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}