import Link from "next/link";

export default async function CountryDetailsPage({ params }) {

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}?fields=name,flags,capital,region,subregion,population,languages,timezones,maps`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const country = Array.isArray(data)
    ? data[0]
    : data;

  if (!country) {
    return <h1>Country not found</h1>;
  }
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-14 text-white">

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">

        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-8 md:p-12">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div>
              <h1 className="text-5xl font-black mb-3">
                {country.name?.common}
              </h1>

              <p className="text-zinc-300 text-lg">
                {country.name?.official}
              </p>
            </div>

            <a
              href={country.maps?.googleMaps}
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-6 py-4 rounded-2xl font-semibold text-center"
            >
              View on Maps
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">
                General Info
              </h3>

              <div className="space-y-3 text-zinc-300">

                <p>
                  <span className="text-white font-semibold">
                    Capital:
                  </span>{" "}
                  {country.capital?.[0]}
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Region:
                  </span>{" "}
                  {country.region}
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Subregion:
                  </span>{" "}
                  {country.subregion}
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Population:
                  </span>{" "}
                  {country.population?.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">
                Extra Details
              </h3>

              <div className="space-y-3 text-zinc-300">

                <p>
                  <span className="text-white font-semibold">
                    Languages:
                  </span>{" "}
                  {Object.values(country.languages || {}).join(", ")}
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Time Zones:
                  </span>{" "}
                  {country.timezones?.join(", ")}
                </p>
              </div>
            </div>

          </div>

          <Link
            href="/countries"
            className="inline-block mt-10 text-blue-400 hover:text-blue-300 transition"
          >
            ← Back to Countries
          </Link>

        </div>
      </div>
    </section>
  );
}