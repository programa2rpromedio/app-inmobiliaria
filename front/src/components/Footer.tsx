import React from "react";
import Logo from "@/images/logo.svg";
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
    <footer className="bg-[#EDEEF2] mt-4 pt-5">
      <div className="flex justify-between px-4">
        <div>
          <p className="text-[10px] font-bold">Acerca de</p>
          <ul className="mt-3 text-[10px] text-slate-9">
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
          <p className="text-[10px] font-bold">Contacto</p>
          <ul className="mt-3 text-[9px] text-slate-9">
            <li className="mb-2">
              <Link href="">Centro de Ayuda</Link>
            </li>
            <li className="mb-2">
              <Link href="">Quiénes somos</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-bold">Información Legal</p>
          <ul className="mt-3 text-[10px] text-slate-9">
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
      <div className="flex justify-end gap-4 px-4 mt-4 items-center">
        <Select>
          <SelectTrigger className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] font-semibold outline-none">
            <SelectValue placeholder="AR$" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-[9px] font-semibold">
              <SelectLabel></SelectLabel>
              <SelectItem value="pesos$">AR$</SelectItem>
              <SelectItem value="doalres">u$s</SelectItem>
              <SelectItem value="reales">r$</SelectItem>
              <SelectItem value="euros">euros</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] font-semibold outline-none">
            <SelectValue placeholder="Argentina" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-[9px] font-semibold">
              <SelectLabel></SelectLabel>
              <SelectItem value="argentina">Argentina</SelectItem>
              <SelectItem value="brasil">Brasil</SelectItem>
              <SelectItem value="chile">Chile</SelectItem>
              <SelectItem value="uruguay">Uruguay</SelectItem>
              <SelectItem value="paraguay">Paraguay</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <hr className=" mt-4 border-[#C2C0C7]" />
      <div className="flex p-4">
        <div>
          <div className="">
            <Image
              src={Logo}
              alt="Logo de la App"
              className=""
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="text-[8px] mx-2">
          <p>2024 Alquileres Ya!</p>
          <p>Todos los derechos reservados</p>
        </div>
        <div className="flex ml-auto gap-4">
          <Image
            src={Facebook}
            alt="Icono Facebook"
            className=""
            width={24}
            height={24}
          />
          <Image
            src={Instagram}
            alt="Icono Facebook"
            className=""
            width={24}
            height={24}
          />
          <Image
            src={Twitter}
            alt="Icono Facebook"
            className=""
            width={24}
            height={24}
          />
          <Image
            src={Youtube}
            alt="Icono Facebook"
            className=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
