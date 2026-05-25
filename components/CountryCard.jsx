import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold mb-4">
          {country.name?.common}
        </h2>

        <p>
          Capital: {country.capital?.[0]}
        </p>

        <p>
          Region: {country.region}
        </p>

        <p>
          Population:
          {" "}
          {country.population?.toLocaleString()}
        </p>

        <Link
          href={`/countries/${country.cca3}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}