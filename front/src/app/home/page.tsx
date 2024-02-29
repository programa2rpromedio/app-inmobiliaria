import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Logo from "@/images/logo.svg";
import Search from "@/images/search.png";
import Alquilar from "@/images/alquilar.svg";
import Temporal from "@/images/temporal.svg";
import CreaCuenta from "@/images/creaCuenta.svg";
import BuscaDescubre from "@/images/buscaDescubre.svg";
import Conecta from "@/images/conectaCasa.svg";
import Presentacion from "@/images/presentacion.svg";
import PropiedadCard from "@/components/PropiedadCard";

export default function page() {
  return (
    <main className=" mx-auto ">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            src={Logo}
            alt="Logo de la App"
            className="ml-2"
            width={40}
            height={40}
          />
          <p className="text-sm font-bold m-4"> Alquileres Ya!</p>
        </div>
        <Button variant="link">Iniciar sesión</Button>
      </div>

      <section className="flex justify-center flex-col">
        <p className="w-[250px] md:w-full mx-auto mb-5 font-bold text-[27px] text-center">
          ¡Tu hogar ideal en un solo click!
        </p>

        <div className="flex  justify-center gap-5 ">
          <div className="flex  ">
            <div className="">
              <Image
                src={Alquilar}
                alt="Logo de la App"
                className=""
                width={20}
                height={20}
              />
            </div>
            <p className="text-md mx-2">Alquilar</p>
          </div>

          <div className="flex">
            <div>
              <Image
                src={Temporal}
                alt="Logo de la App"
                className=""
                width={20}
                height={20}
              />
            </div>

            <p className="text-md mx-2">Temporal</p>
          </div>
        </div>
      </section>

      <section className=" w-[324px] flex mt-5 mx-auto justify-center">
        <div className="bg-[#ffffff] flex items-center rounded-full shadow-xl p-1 w-full">
          <div className="flex">
            <Image
              src={Search}
              alt="Imagen Buscar"
              className=""
              width={15}
              height={15}
            />
          </div>
          <input
            type="text"
            placeholder="¿Dónde querés mudarte?"
            className="flex mx-2 w-[200px] text-[14px]"
          />
          <Button className="rounded-xl text-[14px]  ">Buscar</Button>
        </div>
      </section>

      <section>
        <div className="flex flex-col mx-auto justify-center mt-10">
          <Image
            src={Presentacion}
            alt="Logo de la App"
            className="mx-auto row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
            width={330}
            height={172}
          />
          <Button
            variant={"default"}
            className="relative bg-[#ffffff] text-[#3354FF] w-[75px] h-[20px] text-[11px] font-bold hover:text-[#ffffff] -mt-9 ml-10 p-2"
          >
            Ver la lista
          </Button>
        </div>
      </section>

      <section className="text-center max-w-[250px] mx-auto m-8">
        <p className="font-bold text-[14px] mb-2">
          Encontrá tu próximo hogar rápido, fácil y sin intermediarios.
        </p>
      </section>

      <section>
        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex">
            <div>
              <p className="font-bold text-[14px] mb-2">
                Crea una cuenta con tus datos personales
              </p>
              <p className="text-[12px]">
                Regístrate y crea una cuenta con nosotros. Ingresa al mundo de
                los inmuebles de la mejor manera posible.
              </p>
            </div>
            <div className="items-start min-w-[68px]">
              <Image
                src={CreaCuenta}
                alt="Imagen Crear Cuenta"
                className=" "
                width={68}
                height={68}
              />
            </div>
          </div>
        </div>

        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex ">
            <div>
              <p className="font-bold text-[14px] mb-2">
                Busca y descubre millones de ofertas
              </p>
              <p className="text-[12px]">
                Encuentra el hogar ideal para ti, manteniendo tu información
                segura y tus búsquedas personalizadas.
              </p>
            </div>
            <div className="items-start min-w-[68px]">
              <Image
                src={BuscaDescubre}
                alt="Imagen Crear Cuenta"
                className=" "
                width={68}
                height={68}
              />
            </div>
          </div>
        </div>

        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff] mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex ">
            <div>
              <p className="font-bold text-[14px] mb-2">
                Conecta con la casa de tus sueños
              </p>
              <p className="text-[12px]">
                Sin intermediarios, ni gastos de comisiones, hace que el
                alquiler de tu hogar sea una realidad.
              </p>
            </div>
            <div className="items-start min-w-[68px]">
              <Image
                src={Conecta}
                alt="Imagen Crear Cuenta"
                className=" "
                width={68}
                height={68}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center   m-8">
        <p className="font-bold text-[14px] max-w-[200px] mx-auto mb-2">
          Nuestras recomendaciones exclusivas para ti
        </p>
        <p className="font-semibold text-[12px] mb-2">
          Las mejores zonas y propiedades, al mejor precio
        </p>
      </section>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2 m">
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
          <PropiedadCard />
        </div>
      </section>

      <footer className="bg-[#EDEEF2] p-4">
        <div className="flex justify-between ">
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
        <div className="flex justify-end gap-4 mt-4 items-center">
          <Select>
            <SelectTrigger className="bg-[#ffffff]  w-[90px] h-[20px] text-[9px] font-semibold outline-none">
              <SelectValue placeholder="AR$" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="text-[9px] font-semibold">
                <SelectLabel></SelectLabel>
                <SelectItem value="AR$">AR$</SelectItem>
                <SelectItem value="brasil">Brasil</SelectItem>
                <SelectItem value="chile">Chile</SelectItem>
                <SelectItem value="uruguay">Uruguay</SelectItem>
                <SelectItem value="paraguay">Paraguay</SelectItem>
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
        <div>
          <Image
            src={Logo}
            alt="Logo de la App"
            className=""
            width={22}
            height={22}
          />
          <p>2024 Alquileres Ya!</p>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </main>
  );
}
