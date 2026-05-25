import CountrySearch from "@/components/CountrySearch";

export default async function SearchPage() {

 const res = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population,cca3"
);

  const countries = await res.json();

  return (
    <section>
      <CountrySearch countries={countries} />
    </section>
  );
}