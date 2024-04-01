'use client'
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Logo from "@/images/logoalquileresya.svg";
import Notificacion from "@/images/notificacion.svg";
import Configuracion from "@/images/configuracion.svg";
import userDefault from "@/images/userDefault.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { instanceAxios } from "@/lib/axios";
import CardFavorite from "@/components/CardFavorite";
import { PropertyCard } from "@/lib/types";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: any;
  role: string;
  city: string;
  address: string;
  phone: string;
  favourites?: any[];
  token: string;
}


export default function Page() {

  const [user, setUser] = useState<User>();
  const [props, setProps] = useState<PropertyCard[]>([])

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      instanceAxios.get(`/properties/?user=${user?._id}`)
        .then(res => setProps(res.data))
    }
  }, [user])

  return (
    <div>
      <header className=" bg-[#8E8E8E]/15  h-[152px] hidden sm:flex shadow-lg">
        <div className="flex items-center w-full h-[152px] mx-24 justify-between  ">
          <div className="flex items-center   ">
            <div className="flex items-center">
              <Link href='/'>
                <Image
                  src={Logo}
                  alt="Logo de la App"
                  className="flex"
                  width={220}
                  height={52}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-12 ">
            <div className="flex items-center gap-4">
              <Link href='/perfil' className="text-primary mr-20 underline"> Mi Perfil</Link>
              <Image
                src={Notificacion}
                alt="Icono Notificacion"
                className="flex"
                width={40}
                height={40}
              />
              <Separator
                orientation="vertical"
                className="h-[42px] mx-4  border-[#C2C0C7] border-[1px] "
              />
              <Image
                src={Configuracion}
                alt="Icono Configuracion"
                className="flex"
                width={40}
                height={40}
              />
            </div>
            <Image
              src={user?.profilePicture?.url ?? userDefault.src}
              alt="Avatar del Usuario"
              className="rounded-[100%] shadow-xl"
              width={76}
              height={76}
            />
          </div>
        </div>
      </header>

      <section >
        <h1 className="text-bold text-[3rem] ml-24 mt-14">Mis Propiedades</h1>
        <div className=" w-full lg:w-8/12 mx-auto ml-24 justify-center p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-9 mt-4">
          {props ? props.map(prop => <CardFavorite key={prop.propertyId} {...prop} />)
            : null
          }

        </div>
      </section>
    </div>
  )
}
