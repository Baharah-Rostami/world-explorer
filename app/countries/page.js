import Link from "next/link";

// This page can be statically rendered and cached.

export default async function CountriesPage() {
const res = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3",
  {
    cache: "no-store",
  }
);

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  const countries = await res.json();

  return (
    <section className="min-h-screen px-6 py-12 bg-zinc-100">
      <h1 className="text-4xl font-bold text-center mb-12">
        Explore Countries
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array.isArray(countries) &&
          countries.slice(0, 20).map((country) => (
            <div
              key={country.cca3}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={country.flags?.png}
                alt={country.name?.common}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-2">
                <h2 className="text-2xl font-semibold">
                  {country.name?.common}
                </h2>

                <p>
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital?.[0] || "No Capital"}
                </p>

                <p>
                  <span className="font-medium">Region:</span>{" "}
                  {country.region}
                </p>

                <p>
                  <span className="font-medium">Population:</span>{" "}
                  {country.population?.toLocaleString()}
                </p>

                <Link
                  href={`/countries/${country.cca3}`}
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}