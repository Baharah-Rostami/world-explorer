import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-5 flex justify-between">
      <h1 className="font-bold text-2xl">
        World Explorer
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}