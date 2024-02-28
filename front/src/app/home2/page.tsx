import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/images/logo.svg";
import Search from "@/images/search.png";
import Alquilar from "@/images/alquilar.svg";
import Temporal from "@/images/temporal.svg";
import CreaCuenta from "@/images/creaCuenta.svg";
import BuscaDescubre from "@/images/buscaDescubre.svg";
import Conecta from "@/images/conectaCasa.svg";

import Presentacion from "@/images/presentacion.svg";

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

      <section className="w-[324px] flex mt-5 mx-auto ">
        <div className="flex items-center border-2 rounded-full  bg-[#ffffff] shadow-xl p-3 w-full">
          <Image
            src={Search}
            alt="Logo de la App"
            className=""
            width={15}
            height={15}
          />

          <input
            type="text"
            placeholder="¿Dónde querés mudarte?"
            className="flex mx-2 w-[200px] text-sm"
          />
          <button className="bg-blue-500 text-slate-100 rounded-md">
            Buscar
          </button>
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
          <button className="bg-blue-500 text-slate-100 rounded-md ">
            Ver la lista
          </button>
        </div>
      </section>

      <section>
        <div className="flex max-w-[328px] max-h-[136px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex ">
            <div>
              <p className="font-semibold text-[14px]">
                Crea una cuenta con tus datos personales
              </p>
              <p className="text-[14px]">
                Regístrate y crea una cuenta con nosotros. Ingresa al mundo de
                los inmuebles de la mejor manera posible.
              </p>
            </div>
            <Image
              src={CreaCuenta}
              alt="Imagen Crear Cuenta"
              className=""
              width={68}
              height={68}
            />
          </div>
        </div>

        <div className="flex max-w-[328px] max-h-[136px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex ">
            <div>
              <p className="font-semibold">
                Busca y descubre millones de ofertas
              </p>
              <p>
                Encuentra el hogar ideal para ti, manteniendo tu información
                segura y tus búsquedas personalizadas.
              </p>
            </div>
            <Image
              src={BuscaDescubre}
              alt="Imagen Crear Cuenta"
              className=""
              width={68}
              height={68}
            />
          </div>
        </div>

        <div className="flex max-w-[328px] max-h-[136px] bg-[#ffffff] mt-8 shadow-xl rounded-lg border p-4 mx-auto">
          <div className="flex ">
            <div>
              <p className="font-semibold ">
                Conecta con la casa de tus sueños
              </p>
              <p>
                Sin intermediarios, ni gastos de comisiones, hace que el
                alquiler de tu hogar sea una realidad.
              </p>
            </div>
            <Image
              src={Conecta}
              alt="Imagen Crear Cuenta"
              className=""
              width={68}
              height={68}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
