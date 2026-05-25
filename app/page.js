import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center space-y-8">

        <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
           Discover the World
        </div>

        <h1 className="text-6xl md:text-7xl font-black leading-tight">
          Explore Countries
          <span className="block text-blue-400">
            Beautifully
          </span>
        </h1>

        <p className="text-lg text-zinc-300 leading-8 max-w-2xl mx-auto">
          Learn about countries, capitals, populations, regions,
          languages, and more with a modern interactive explorer.
        </p>

        <div className="pt-4">
          <Link
            href="/countries"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/30"
          >
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  );
}