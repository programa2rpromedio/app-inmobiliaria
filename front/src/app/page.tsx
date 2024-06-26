'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/images/logoalquileresya.svg";
import Search from "@/images/search.png";
import Alquilar from "@/images/alquilar.svg";
import Temporal from "@/images/temporal.svg";
import CreaCuenta from "@/images/creaCuenta.svg";
import BuscaDescubre from "@/images/buscaDescubre.svg";
import Conecta from "@/images/conectaCasa.svg";
import Presentacion from "@/images/presentacion.svg";
import userDefault from "@/images/userDefault.png";
import Footer from "@/components/Footer";
import CardProperty from "@/components/CardProperty";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/getUser";
import { PropertyCard, User } from "@/lib/types";
import { instanceAxios } from "@/lib/axios";

export default function Page() {

  const [user, setUser] = useState<User | undefined>()
  const [properties, setProperties] = useState<PropertyCard[] | undefined>()
  const [city, setCity] = useState<string | undefined>()


  useEffect(() => {
    setUser(getUser())
    instanceAxios.get('/properties')
      .then(res => setProperties(res.data))
      .catch(err => console.log(err))
  }, [])


  const handleFilterByCity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = `/propiedades/?city=${city}`
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  return (
    <main className=" mx-auto ">
      <div className="flex justify-between  flex-wrap items-center sm:h-[6rem] bg-white p-2">
        <div className="flex items-center ">
          <Image
            src={Logo}
            alt="Logo Alquileres Ya"
            className="sm:ml-2"
            width={200}
            height={200}
          />
        </div>
        <div className='flex justify-between sm:justify-normal items-center gap-4 md:gap-32'>
          {
            user ?
              <div className="flex  gap-2 w-full items-center sm:gap-8 md:gap-16 sm:justify-normal sm:px-2">
                {
                  user.role === 'owner' ?
                    <Link href='cargar-propiedad' className="order-2 sm:order-1 border border-primary text-primary hover:bg-muted h-10 px-1 sm:px-4 py-2 text-[13px] text-nowrap ">Publicar propiedad</Link>
                    :
                    null
                }
                <Link href='/perfil'>
                  <Image src={user.profilePicture?.url ?? userDefault.src} alt="user picture" width={60}
                    height={60} className=" sm:order-2" />
                </Link>
              </div>
              :
              <Link href='/iniciar-sesion' className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Iniciar sesión</Link>
          }
        </div>

      </div>

      <section className="flex justify-center flex-col sm:p-10 sm:pb-3">
        <h2 className="w-[250px]  sm:w-full mx-auto mb-5 font-bold text-[27px] text-center sm:text-[4rem]">
          ¡Tu hogar ideal en un solo click!
        </h2>

        <div className="flex  justify-center gap-5 ">
          <div className="flex">
            <div className="">
              <Image
                src={Alquilar}
                alt="Logo de la App"
                className=""
                width={20}
                height={20}
              />
            </div>
            <p className="text-md mx-2 cursor-pointer" onClick={() => window.location.href = '/propiedades'}>Alquilar</p>
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
            <p className="text-md mx-2 cursor-pointer" onClick={() => window.location.href = '/propiedades'}>Temporal</p>
          </div>
        </div>
      </section>

      <section className=" w-[324px] flex mt-5 mx-auto justify-center sm:w-[50%]">
        <form className="bg-[#ffffff] flex justify-around   p-1 w-full sm:rounded-[4rem]" onSubmit={(e) => handleFilterByCity(e)}>
          <div className="flex items-center w-full px-1">
            <Image
              src={Search}
              alt="Imagen Buscar"
              className=""
              width={15}
              height={15}
            />
            <input
              type="text"
              placeholder="¿Dónde querés mudarte?"
              className="flex mx-2 w-full sm:w-full text-[14px] border-y-transparent border-l-transparent border-[#797687] border-r-[1px] focus:ring-0 focus:border-r  focus-visible:border-y-transparent  focus-visible:border-l-transparent"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <div className="hidden md:flex items-center">
            <strong>🏚️</strong>
            <input
              type="text"
              placeholder="Tipo de propiedad"
              className="flex mx-2 w-[200px] sm:w-full text-[14px] border-y-transparent border-l-transparent border-[#797687] border-r-[1px] focus:ring-0 focus:border-r  focus-visible:border-y-transparent  focus-visible:border-l-transparent"
            />
          </div>
          <div className="hidden md:flex items-center">
            <strong>💵</strong>
            <input
              type="text"
              placeholder="Precio"
              className="flex mx-2 w-[200px] text-[14px] sm:w-full border-y-transparent border-l-transparent border-[#797687] border-r-[1px] focus:ring-0 focus:border-r  focus-visible:border-y-transparent  focus-visible:border-l-transparent "
            />
          </div> */}
          <Button variant='default' size='lg' className="hidden md:block rounded-[40px]">Buscar</Button>
          <Button variant='default' size='sm' className=" md:hidden rounded-[40px]">Buscar</Button>
        </form>
      </section>

      <section >
        <div className="flex flex-col mx-auto justify-center mt-10 sm:hidden relative w-max">
          <Image
            src={Presentacion}
            alt="Logo de la App"
            className="mx-auto row-start-1 row-end-3 rounded-tl-[20px] rounded-bl-[20px] object-cover"
            width={330}
            height={172}
          />
          <Button
            variant={"default"}
            className="absolute bg-[#ffffff] text-[#3354FF] w-[75px] h-[20px] text-[11px] font-bold hover:text-[#ffffff] bottom-2 left-4 p-2"
            onClick={() => window.location.href = '/propiedades'}
          >
            Ver la lista
          </Button>
        </div>
        <div className=" hidden sm:block bg-bannerDesktop bg-no-repeat sm:w-[80%] w-[60%] sm:h-[40vh] md:h-[45vh] lg:h-[55vh] xl:h-[65vh] mx-auto relative bg-cover md:bg-left bg- mt-10">
          <Button className="absolute bottom-2 left-10 hidden md:block xl:left-20" size='lg' variant='outline' onClick={() => window.location.href = '/propiedades'}>Ver Lista</Button>
          <Button className="absolute sm:bottom-1 sm:left-6 hidden sm:block md:hidden" size='sm' variant='outline' onClick={() => window.location.href = '/propiedades'}>Ver Lista</Button>
        </div>
      </section>

      <section className="text-center max-w-[250px] mx-auto m-8 sm:max-w-[60%]">
        <h3 className="font-bold text-[14px] mb-2 sm:text-[2rem]">
          Encontrá tu próximo hogar rápido, fácil y sin intermediarios.
        </h3>
      </section>

      <section className="sm:bg-white sm:w-[80%] sm:mx-auto sm:flex sm:rounded-[2rem] sm:p-4">
        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto sm:mt-0 sm:max-h-none sm:border-none ">
          <div className="flex sm:flex-col">
            <div className="sm:order-2">
              <p className="font-bold text-[14px] mb-2 sm:text-[1.7rem]">
                Crea una cuenta con tus datos personales
              </p>
              <p className="text-[12px] sm:text-[1.2rem]">
                Regístrate y crea una cuenta con nosotros. Ingresa al mundo de
                los inmuebles de la mejor manera posible.
              </p>
            </div>
            <div className="items-start min-w-[68px] ">
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

        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff]  mt-8 shadow-xl rounded-lg border p-4 mx-auto sm:mt-0 sm:max-h-none sm:border-none ">
          <div className="flex sm:flex-col sm:gap-2">
            <div className="sm:order-2">
              <p className="font-bold text-[14px] mb-2  sm:text-[1.7rem]">
                Busca y descubre millones de ofertas
              </p>
              <p className="text-[12px] sm:text-[1.2rem]">
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

        <div className="flex max-w-[328px] max-h-[156px] bg-[#ffffff] mt-8 shadow-xl rounded-lg border p-4 mx-auto sm:mt-0 sm:max-h-none sm:border-none ">
          <div className="flex sm:flex-col">
            <div className="sm:order-2">
              <p className="font-bold text-[14px] mb-2  sm:text-[1.7rem]">
                Conecta con la casa de tus sueños
              </p>
              <p className="text-[12px] sm:text-[1.2rem]">
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

      <section className="text-center m-8 sm:text-left sm:w-[60%] md:w-[75%] sm:mx-auto sm:mt-28">
        <h3 className="font-bold text-[14px] max-w-[200px] mx-auto mb-2 sm:text-[2rem] sm:max-w-none ">
          Nuestras recomendaciones exclusivas para ti
        </h3>
        <h3 className="font-semibold text-[12px] mb-2 sm:text-[1.7rem]">
          Las mejores zonas y propiedades, al mejor precio
        </h3>
      </section>

      <section className="sm:w-[80%] sm:mx-auto ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2 sm:hidden">
          {
            properties?.length ? properties.slice(0, 6).map(prop => {
              return <CardProperty key={prop.propertyId} {...prop} />
            })
              :
              <h2>No hay propiedades </h2>
          }
        </div>
        <div className="sm:flex sm:flex-col sm:gap-4 sm:items-center md:flex-row md:flex-wrap md:justify-center hidden">
          {
            properties?.length ? properties.slice(0, 6).map(prop => {
              return <CardProperty key={prop.propertyId} {...prop} />
            })
              :
              <h2>No hay propiedades </h2>
          }
        </div>
      </section>

      <section>
        <div className="flex flex-col mx-auto items-center gap-4 m-4 text-[12px]">
          <p>Sigue descubriendo las mejores propiedades</p>
          <Button className="bg-[#19BC86] w-[130px] h-[36px]" onClick={() => window.location.href = '/propiedades'}>
            Mostrar más
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
