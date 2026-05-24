import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold text-blue-600">
          World Explorer
        </h1>

        <p className="text-lg text-zinc-700 leading-8">
          Explore countries around the world and learn about their
          flags, capitals, populations, currencies, and languages.
        </p>

        <Link
          href="/countries"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Explore Countries
        </Link>
      </div>
    </section>
  );
}