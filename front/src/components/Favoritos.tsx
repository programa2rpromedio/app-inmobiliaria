/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import imgUserDefault from "@/images/userDefault.svg";
import Image from "next/image";
import arrowLeft from "@/images/arrowLeft.svg";

import Logo from "@/images/logoalquileresya.svg";
import Notificacion from "@/images/notificacion.svg";
import Configuracion from "@/images/configuracion.svg";
import { Separator } from "@/components/ui/separator";
import { instanceAxios } from "@/lib/axios";

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
  favourites: any[];
  token: string;
}

export default function MisPropiedades() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex flex-col h-screen ">
      <header className=" bg-[#8E8E8E]/15  h-[90px] flex flex-col shadow-lg">
        <div className="flex h-[152px] mx-[20px] justify-between items-center  ">
          <div className="flex ">
            <Image
              src={Logo}
              alt="Logo de la App"
              className="flex"
              width={120}
              height={20}
            />
          </div>

          <div className="flex h-[32px]  ">
            <Image
              src={imgUserDefault}
              alt="Avatar del Usuario"
              className="rounded-[100%] shadow-xl"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <Image
            src={arrowLeft}
            alt="icono volver a la pagina anterior"
            className=""
            width={24}
            height={24}
          />
          <p className="text-[14px]">Mis Favoritos</p>
        </div>
      </header>

      <section className="border rounded-[10px] shadow-3 m-3 py-4 px-2 mt-8 flex flex-col gap-5">
        <div>
          <p className="text-[14px] font-bold">
            Tienes 4 propiedades Guardadas
          </p>
          <p className="text-[12px] font-semibold">3 en alquiler, 1 temporal</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="rounded-[8px] text-[12px] font-semibold"
            placeholder="Busca una propiedad"
          />
          <select
            name=""
            id=""
            className="rounded-[8px] text-[12px] font-semibold"
          ></select>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 m-3 py-4 px-2 mt-8">
          acá van tarjetas de las propiedades favoritas
        </div>
      </section>

      <section className="flex flex-col mx-auto">
        <p className="text-[12px] font-semibold text-center">
          ¿Necesitas organizarte?
        </p>
        <p className="text-[12px] font-semibold text-center underline text-[#19BC86]">
          Ver calendario
        </p>
      </section>
    </div>
  );
}
