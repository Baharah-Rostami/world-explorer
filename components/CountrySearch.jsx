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
    <section className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <div className="relative border-b border-white/10">

        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[5px] text-cyan-300 text-sm mb-4">
              Search & Discover
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Find Any Country
              <span className="block text-zinc-500">
                Instantly
              </span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-2xl">
              Search countries by name or filter them by region
              with a smooth modern explorer experience.
            </p>

          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row gap-5 mb-12">

          <div className="relative flex-1">

            <input
              type="text"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/4 border border-white/10 rounded-2xl px-6 py-5 outline-none text-white placeholder:text-zinc-500 focus:border-cyan-400/40 transition"
            />

            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500">
              🔍
            </div>

          </div>

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-white/4 border border-white/10 rounded-2xl px-6 py-5 outline-none text-zinc-300 focus:border-cyan-400/40 transition"
          >
            <option className="bg-slate-900">All</option>
            <option className="bg-slate-900">Africa</option>
            <option className="bg-slate-900">Americas</option>
            <option className="bg-slate-900">Asia</option>
            <option className="bg-slate-900">Europe</option>
            <option className="bg-slate-900">Oceania</option>
          </select>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredCountries.map((country) => (
            <Link
              href={`/countries/${country.cca3}`}
              key={country.cca3}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/3 hover:bg-white/5 transition duration-500"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={country.flags?.png}
                  alt={country.name?.common}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-6">

                  <div className="inline-flex px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-zinc-200 mb-3">
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

                  <div className="rounded-2xl bg-white/4 border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Population
                    </p>

                    <h3 className="mt-2 text-lg font-bold">
                      {country.population?.toLocaleString()}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/4 border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Code
                    </p>

                    <h3 className="mt-2 text-lg font-bold">
                      {country.cca3}
                    </h3>
                  </div>

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-zinc-400 text-sm tracking-wide">
                    Explore Country
                  </span>

                  <div className="w-12 h-12 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-bold group-hover:translate-x-1 transition">
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