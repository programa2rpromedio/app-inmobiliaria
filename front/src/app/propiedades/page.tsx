import CardProperty from "@/components/CardProperty";
import ContainerProperties from "@/components/ContainerProperties";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className=" w-full lg:w-8/12 mx-auto justify-center p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-9 mt-4">
        <ContainerProperties />
      </main>
    </>
  )
}