import CardProperty from "@/components/CardProperty";
import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Header />
      <main className="w-8/12 mx-auto border border-black p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-9">
        <CardProperty />
        <CardProperty />
        <CardProperty />
      </main>
    </>
  )
}