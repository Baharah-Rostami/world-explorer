export default function AboutPage() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <h1 className="text-5xl font-black mb-6">
          About World Explorer
        </h1>

        <p className="text-zinc-300 text-lg leading-8">
          World Explorer is a modern Next.js project
          that allows users to discover countries,
          search and filter information, and explore
          detailed country data using the REST Countries API.
        </p>

      </div>
    </section>
  );
}