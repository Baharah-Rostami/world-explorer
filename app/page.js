import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center justify-center px-6">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-4xl text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <p className="text-sm text-zinc-300 tracking-wide">
            Discover Every Country
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          Explore the World
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            In One Place
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 text-base md:text-lg leading-8 max-w-2xl mx-auto">
          Search countries, explore capitals, populations,
          languages, regions, and more with a clean modern experience.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/countries"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300 px-7 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
          >
            Explore Countries
          </Link>

          <Link
            href="/about"
            className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Learn More
          </Link>

        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-cyan-300">195+</h2>
            <p className="text-sm text-zinc-400 mt-1">Countries</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-cyan-300">250+</h2>
            <p className="text-sm text-zinc-400 mt-1">Languages</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-cyan-300">24/7</h2>
            <p className="text-sm text-zinc-400 mt-1">Explore</p>
          </div>

        </div>

      </div>
    </section>
  );
}