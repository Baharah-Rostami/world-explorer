import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2">

      <div className="absolute inset-0 bg-linear-to-br from-cyan-400/0 via-blue-500/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs tracking-wide text-zinc-200">
          {country.region}
        </div>

        <div className="absolute bottom-5 left-5">
          <h2 className="text-3xl font-black text-white drop-shadow-lg">
            {country.name?.common}
          </h2>

          <p className="text-zinc-300 text-sm mt-1">
            {country.capital?.[0]}
          </p>
        </div>
      </div>

      <div className="relative p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-zinc-400 text-xs uppercase tracking-widest">
              Population
            </p>

            <h3 className="text-lg font-bold text-white mt-2">
              {country.population?.toLocaleString()}
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <p className="text-zinc-400 text-xs uppercase tracking-widest">
              Code
            </p>

            <h3 className="text-lg font-bold text-white mt-2">
              {country.cca3}
            </h3>
          </div>

        </div>

        <Link
          href={`/countries/${country.cca3}`}
          className="group/button flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-linear-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300"
        >
          Explore Country

          <span className="group-hover/button:translate-x-1 transition">
            →
          </span>
        </Link>

      </div>
    </div>
  );
}