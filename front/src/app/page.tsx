import Link from "next/link";
import MiPerfil from "@/components/MiPerfil";

export default function Home() {
  const userData = {
    nombre: "Juan",
    apellido: "Pérez",
    ciudad: "Buenos Aires",
    pais: "Argentina",
    direccion: "Florida 345, CABA",
    email: "juanperez@gmail.com",
    telefono: "11 12345678",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-[1440 px]">
      <MiPerfil userData={userData} />
    </main>
  );
}
