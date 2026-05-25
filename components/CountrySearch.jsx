"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country?.name?.common
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All"
        ? true
        : country.region === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-12">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-center mb-10">
          Search Countries
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="p-4 rounded-2xl bg-slate-900 border border-white/10"
          >
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCountries.map((country) => (
            <div
              key={country.cca3}
              className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden"
            >

              <img
                src={country.flags?.png}
                alt={country.name?.common}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold mb-3">
                  {country.name?.common}
                </h2>

                <div className="space-y-2 text-zinc-300">

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
                      Population:
                    </span>{" "}
                    {country.population?.toLocaleString()}
                  </p>

                </div>

                <Link
                  href={`/countries/${country.cca3}`}
                  className="inline-block mt-5 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl"
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