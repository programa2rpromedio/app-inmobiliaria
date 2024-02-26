import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/registrar">registrarse</Link>
      <Link href="/iniciar-sesion">iniciar sesion</Link>
      <Link href="/detalle">Detalle</Link> {/*  TODO deberia recibir el id  */}
      <Link href="/home">Home</Link>
    </main>
  );
}
