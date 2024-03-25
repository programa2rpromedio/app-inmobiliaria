import MiPerfil from "@/components/MiPerfil";

type UserData = {
  nombre: string;
  apellido: string;
  ciudad: string;
  pais: string;
  direccion: string;
  email: string;
  telefono: string;
};

interface ProfileFormProps {
  userData: UserData;
}

export default function page() {
  const userData: UserData = {
    nombre: "",
    apellido: "",
    pais: "",
    ciudad: "",
    direccion: "",
    email: "",
    telefono: "",
  };

  return (
    <main className="">
      <MiPerfil userData={userData} />
      <div className=""></div>
    </main>
  );
}
