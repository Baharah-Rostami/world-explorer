import Link from "next/link";

export default async function CountriesPage() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,currencies,cca3",
    {
      cache: "no-store",
    }
  );

  const countries = await res.json();

  return (
    <section className="min-h-screen bg-[#030712] text-white overflow-hidden">

      <div className="relative border-b border-white/10">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[5px] text-cyan-300 text-sm mb-4">
              World Explorer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Discover Countries
              <span className="block text-zinc-500">
                Beyond Maps
              </span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-2xl">
              Explore countries through an immersive modern experience —
              capitals, currencies, populations, and regions all beautifully
              organized in one place.
            </p>

          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {countries.slice(0, 20).map((country) => (
            <Link
              href={`/countries/${country.cca3}`}
              key={country.cca3}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition duration-500"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={country.flags?.png}
                  alt={country.name?.common}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">

                  <div className="mb-3 inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-zinc-200">
                    {country.region}
                  </div>

                  <h2 className="text-3xl font-black">
                    {country.name?.common}
                  </h2>

                  <p className="text-zinc-300 mt-1">
                    {country.capital?.[0] || "No Capital"}
                  </p>

                </div>

              </div>

              <div className="p-6">

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Population
                    </p>

                    <h3 className="mt-2 text-lg font-bold">
                      {country.population?.toLocaleString()}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Currency
                    </p>

                    <h3 className="mt-2 text-lg font-bold line-clamp-1">
                      {Object.values(country.currencies || {})
                        .map((currency) => currency.name)
                        .join(", ")}
                    </h3>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-zinc-400 text-sm tracking-wide">
                    Click to explore
                  </span>

                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-bold group-hover:translate-x-1 transition">
                    →
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}