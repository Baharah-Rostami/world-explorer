import Link from "next/link";

// This page fetches fresh data every time.

export default async function CountryDetailsPage({ params }) {
 const res = await fetch(
  `https://restcountries.com/v3.1/alpha/${params.code}?fields=name,flags,capital,region,subregion,population,languages,timezones,maps`,
  {
    cache: "no-store",
  }
);

  const country = await res.json();

  return (
    <section className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="w-full h-80 object-cover"
        />

        <div className="p-8 space-y-4">
          <h1 className="text-4xl font-bold">
            {country.name?.common}
          </h1>

          <p>
            <span className="font-semibold">
              Official Name:
            </span>{" "}
            {country.name?.official}
          </p>

          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0]}
          </p>

          <p>
            <span className="font-semibold">Region:</span>{" "}
            {country.region}
          </p>

          <p>
            <span className="font-semibold">Subregion:</span>{" "}
            {country.subregion}
          </p>

          <p>
            <span className="font-semibold">Population:</span>{" "}
           {country.population?.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">Languages:</span>{" "}
            {Object.values(country.languages || {}).join(", ")}
          </p>

          <p>
            <span className="font-semibold">Time Zones:</span>{" "}
            {country.timezones?.join(", ")}
          </p>

          <a
           href={country.maps?.googleMaps}
            target="_blank"
            className="inline-block bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
          >
            View on Google Maps
          </a>

          <div>
            <Link
              href="/countries"
              className="inline-block mt-6 text-blue-600 hover:underline"
            >
              ← Back to Countries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}