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
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-14 text-white">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-black mb-4">
            Explore Countries
          </h1>

          <p className="text-zinc-400 text-lg">
            Browse countries around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {countries.slice(0, 20).map((country) => (
            <div
              key={country.cca3}
              className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-blue-400/40 transition duration-300 shadow-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={country.flags?.png}
                  alt={country.name?.common}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 space-y-3">

                <h2 className="text-2xl font-bold">
                  {country.name?.common}
                </h2>

                <div className="space-y-2 text-zinc-300">

                  <p>
                    <span className="text-white font-semibold">
                      Capital:
                    </span>{" "}
                    {country.capital?.[0] || "No Capital"}
                  </p>

                  <p>
                    <span className="text-white font-semibold">
                      Region:
                    </span>{" "}
                    {country.region}
                  </p>

                  <p>
                    <span className="text-white font-semibold">
                      Population:
                    </span>{" "}
                    {country.population?.toLocaleString()}
                  </p>
                  <p>
                    <span className="text-white font-semibold">
                      Currency:
                    </span>{" "}
                    {Object.values(country.currencies || {})
                      .map((currency) => currency.name)
                      .join(", ")}
                  </p>
                </div>

                <Link
                  href={`/countries/${country.cca3}`}
                  className="inline-block mt-4 w-full text-center bg-blue-500 hover:bg-blue-600 transition py-3 rounded-2xl font-semibold"
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}