import React from "react";
import Logo from "@/images/logoalquileresya.svg";
import Facebook from "@/images/facebook.svg";
import Twitter from "@/images/twitter.svg";
import Instagram from "@/images/instagram.svg";
import Youtube from "@/images/youtube.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#EDEEF2] mt-4 pt-5 overflow-hidden">
      <div className="flex justify-between px-4 md:ml-20 md:justify-start  md:gap-12">
        <div>
          <p className="text-[10px] md:text-[18px] font-bold">Acerca de</p>
          <ul className="mt-3 text-[10px] md:text-[18px] text-slate-9">
            <li className="mb-2">
              <Link href="">Alquilar</Link>
            </li>
            <li className="mb-2">
              <Link href="">Temporal</Link>
            </li>
            <li className="mb-2">
              <Link href="">Alquila tu propiedad</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] md:text-[18px]  font-bold">Contacto</p>
          <ul className="mt-3 text-[9px] md:text-[18px]  text-slate-9">
            <li className="mb-2">
              <Link href="">Centro de Ayuda</Link>
            </li>
            <li className="mb-2">
              <Link href="">Quiénes somos</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] md:text-[18px]  font-bold">
            Información Legal
          </p>
          <ul className="mt-3 text-[10px] md:text-[18px] text-slate-9">
            <li className="mb-2">
              <Link href="">Términos y condiciones</Link>
            </li>
            <li className="mb-2">
              <Link href="">Política de privacidad</Link>
            </li>
            <li className="mb-2">
              <Link href="">Aviso legal</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end gap-4 px-4 mt-4 items-center mr-20 md:mb-10">
        <Select>
          <SelectTrigger className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] md:w-[234px] md:h-[56px] md:text-[20px] md:rounded-[15px]  font-semibold outline-none">
            <SelectValue placeholder="AR$" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-[9px] font-semibold">
              <SelectLabel></SelectLabel>
              <SelectItem
                value="pesos$"
                className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] md:w-[234px] md:h-[56px] md:text-[20px] md:rounded-[15px]  font-semibold outline-none"
              >
                AR$
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] md:w-[234px] md:h-[56px] md:text-[20px] md:rounded-[15px] font-semibold outline-none">
            <SelectValue placeholder="Argentina" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-[9px] font-semibold">
              <SelectLabel></SelectLabel>
              <SelectItem
                value="argentina"
                className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] md:w-[234px] md:h-[56px] md:text-[20px] md:rounded-[15px]  font-semibold outline-none"
              >
                Argentina
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr className=" mt-4 border-[#C2C0C7]" />
      <div className="flex p-4 md:py-4 md:px-24 items-center">
        <div className="flex items-center">
          <div className=" ">
            <Image
              src={Logo}
              alt="Logo de la App"
              className="md:w-[140px] md:h-[120px]"
              width={65}
              height={35}
            />
          </div>
          <div className="text-[8px] mx-4 md:text-[12px] ">
            <p>2024 Alquileres Ya!</p>
            <p>Todos los derechos reservados</p>
            <p>Realizado dentro del programa Emulaciones - Programador Promedio</p>
            <p>No realice ninguna operación sin antes constatar la información de la propiedad y/o propietario</p>
          </div>
        </div>

        <div className="flex justify-end  gap-4 w-full">
          <Image
            src={Facebook}
            alt="Icono Facebook"
            className="md:w-[64px] md:h-[64px]"
            width={24}
            height={24}
          />
          <Link href='https://www.instagram.com/programadorpromedio_/' target="_blank" className=" w-max h-[24px] md:w-[64px] md:h-[64px]">
            <Image
              src={Instagram}
              alt="Icono Facebook"
              className=" md:w-[64px] md:h-[64px]"
              width={24}
              height={24}
            />
          </Link>
          <Image
            src={Twitter}
            alt="Icono Facebook"
            className="md:w-[64px] md:h-[64px]"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
