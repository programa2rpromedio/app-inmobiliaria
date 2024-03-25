import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "@/images/logo.svg";
import Search from "@/images/search.png";
import Alquilar from "@/images/alquilar.svg";
import Temporal from "@/images/temporal.svg";
import CreaCuenta from "@/images/creaCuenta.svg";
import BuscaDescubre from "@/images/buscaDescubre.svg";
import Conecta from "@/images/conectaCasa.svg";
import Presentacion from "@/images/presentacion.svg";
import PropiedadCard from "@/components/PropiedadCard";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function page() {
  return (
    <main className=" mx-auto ">
      <div className="flex justify-between  items-center">
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
        <div className="flex flex-col items-center justify-center mt-10 rounded-xl overflow-hidden">
          <Image
            src={Presentacion}
            alt="Logo de la App"
            className="w-full h-40 object-cover"
            width={330}
            height={172}
          />
          <Button
            variant={"default"}
            className="mt-2 bg-[#ffffff] text-[#3354FF] w-[75px] h-[20px] text-[11px] font-bold hover:text-[#ffffff] p-2"
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

      <section>
        <div className="flex flex-col mx-auto items-center gap-4 m-4 text-[12px]">
          <p>Sigue descubriendolas mejores propiedades</p>
          <Button className="bg-[#19BC86] w-[130px] h-[36px] ">
            Mostrar más
          </Button>
        </div>
      </section>

      <section>
        <div className="bg-[#E6E9F5] w-[320px] h[180px] flex flex-col mx-auto my-3 rounded-md ">
          <div className="flex flex-col p-3 font-bold text-[12px] ">
            <p className=" ">Recibe las ofertas más recientes,</p>
            <p>actualizaciones y mucho más.</p>
          </div>
          <div className="flex gap-2 mx-auto">
            <Input
              type="email"
              placeholder="Ingresa tu correo"
              className=" w-[186px] h-[36px] text-[12px] font-semibold "
            />
            <Button className=" w-[94px] h-[36px] text-[12px] font-semibold ">
              {" "}
              Suscribirse{" "}
            </Button>
          </div>
          <div className="flex flex-col text-[10px] m-3">
            <p>*Al suscribirte a nuestro newsletter aceptas nuestros </p>
            <p>
              <Link href="" className="text-[#3354FF] hover:underline">
                Términos y condiciones
              </Link>
              {"  "}y nuestra
              <Link href="" className="text-[#3354FF] hover:underline">
                {" "}
                Política de privacidad
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
