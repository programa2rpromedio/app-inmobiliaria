/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import imgUserDefault from "@/images/userDefault.svg";
import Image from "next/image";

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
      <div className="bg-[#3354FF] text-[#3354FF] h-[43px] flex-block sm:hidden ">
        {" "}
        -
      </div>

      <header className=" bg-[#8E8E8E]/15  h-[152px] hidden sm:flex shadow-lg">
        <div className="flex items-center w-full h-[152px] mx-24 justify-between  ">
          <div className="flex items-center   ">
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Logo de la App"
                className="flex"
                width={200}
                height={48}
              />
            </div>
          </div>
          <div className="flex justify-between items-center gap-12 ">
            <div className="flex items-center gap-4">
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
              src={user?.profilePicture || imgUserDefault}
              alt="Avatar del Usuario"
              className="rounded-[100%] shadow-xl"
              width={76}
              height={76}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
