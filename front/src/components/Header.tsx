"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import logo from "@/images/logoalquileresya.svg";
import { Button } from "./ui/button";
import Link from "next/link";
import { User } from "@/lib/types";
import { getUser } from "@/lib/getUser";
import userDefault from "@/images/userDefault.png";

interface Props {
  getProperties?: (p: string) => Promise<void>;
}

export default function Header({ getProperties }: Props) {
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    setUser(getUser());
  }, []);

  type Type = "Alquiler" | "Temporal";
  const [viewType, setViewType] = useState<Type | undefined>();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(e.currentTarget.textContent);

    setViewType((prevState: Type | undefined): Type => {
      // if (prevState === undefined) return
      return prevState === "Alquiler" ? "Temporal" : "Alquiler";
    });
  };

  const [filter, setFilter] = useState<string | undefined>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filter === undefined) return;
    if (getProperties) {
      getProperties(filter);
    }

  };

  const handleChangge = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    if (viewType !== undefined) return setViewType(undefined);
  };

  return (
    <header className="py-2 px-4 sm:px-20 bg-[#fff]">
      <div className="flex flex-col sm:flex-row justify-between  sm:items-center mb-6">
        <div className="flex justify-between sm:justify-normal items-center gap-2">
          <Image src={logo} alt="Logo Alquileres Ya" width={200} height={200} />
        </div>
        <div className='flex justify-between sm:justify-normal items-center gap-4 md:gap-32'>

          {
            user ?
              <div className="flex justify-between gap-4 w-full items-center sm:gap-8 md:gap-16 sm:justify-normal sm:px-2">
                {
                  user.role === 'owner' ?
                    <Link href='cargar-propiedad' className="order-2 sm:order-1 border border-primary text-primary hover:bg-muted h-10 px-4 py-2">Publicar propiedad</Link>
                    :
                    null
                }
                <Link href='/perfil'>
                  <Image src={user.profilePicture?.url ?? userDefault.src} alt="user picture" width={70}
                    height={70} className=" sm:order-2" />
                </Link>
              </div>
              :
              <Link href='iniciar-sesion' className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Iniciar sesión</Link>

          }
        </div>
      </div>

      <div className="flex gap-5 text-[#3354FF] mb-5">
        <Link href="/">Home</Link>
        <strong> - </strong>
        <Link href="/propiedades">Alquiler</Link>
      </div>
      <hr className="w-[50%] mb-[20px]  border-[#CAC4D0]" />

      <div>
        <Link href='' className={`mr-[10px] border border-b-0 p-2 rounded-[4px] ${viewType === 'Alquiler' ? 'border-b-[3px] border-primary ' : null}`}
          onClick={(e) => {
            handleClick(e);
            if (getProperties) {
              getProperties("");
            }
          }}
        >
          Alquiler
        </Link>
        <Link href='' className={`mr-[10px] border border-b-0 p-2 rounded-[4px] ${viewType === 'Temporal' ? 'border-b-[3px] border-primary ' : null}`}
          onClick={(e) => {
            handleClick(e);
            if (getProperties) {
              getProperties("");
            };
          }}
        >
          Temporal
        </Link>
        <div className="mt-3 w-full ">
          <form
            className="w-full flex items-center"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="w-[80%]">
              <input
                type="text"
                placeholder="¿Dónde querés mudarte?"
                className="bg-transparent outline-none border-none w-full"
                onChange={(e) => handleChangge(e)}
              />
              {/* <input type="text" placeholder='Tipo de propiedad' className='hidden sm:inline-block sm:w-[150px] md:w-max bg-transparent outline-none border-none' />
            <input type="text" placeholder='Precio' className='hidden sm:inline-block sm:w-[100px] md:w-max bg-transparent outline-none border-none' /> */}
            </div>
            <Button variant="default" size="lg" className="text-white">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9288 21.5312L29.1045 26.6916C29.2638 26.8497 29.3903 27.0377 29.4766 27.2448C29.5629 27.452 29.6073 27.6742 29.6073 27.8986C29.6073 28.123 29.5629 28.3452 29.4766 28.5523C29.3903 28.7593 29.264 28.9471 29.1049 29.1051M23.9288 21.5312L13.9491 26.3487M23.9288 21.5312C25.5977 19.3576 26.5019 16.692 26.4985 13.9491M23.9288 21.5312L26.3485 13.9493M29.1049 29.1051C28.947 29.2642 28.7591 29.3905 28.5521 29.4767C28.345 29.563 28.1228 29.6075 27.8984 29.6075C27.674 29.6075 27.4518 29.563 27.2446 29.4767C27.0375 29.3904 26.8495 29.264 26.6915 29.1046L21.5311 23.929C19.3574 25.5979 16.6918 26.5021 13.949 26.4987M29.1049 29.1051C29.1048 29.1052 29.1046 29.1054 29.1045 29.1055L28.9988 28.999L29.1053 29.1046C29.1052 29.1048 29.105 29.1049 29.1049 29.1051ZM13.949 26.4987L13.9491 26.3487M13.949 26.4987C13.949 26.4987 13.9491 26.4987 13.9491 26.4987V26.3487M13.949 26.4987C11.467 26.4986 9.04078 25.7626 6.97711 24.3837C4.91338 23.0048 3.3049 21.0448 2.35507 18.7517C1.40524 16.4587 1.15672 13.9354 1.64094 11.5011C2.12516 9.06674 3.32037 6.83066 5.07542 5.07561C6.83048 3.32055 9.06656 2.12534 11.5009 1.64113C13.9352 1.15691 16.4585 1.40543 18.7516 2.35525C21.0447 3.30508 23.0046 4.91356 24.3835 6.97729C25.7624 9.04097 26.4984 11.4672 26.4985 13.9491M13.9491 26.3487C11.4968 26.3487 9.0995 25.6215 7.06044 24.259C5.02138 22.8965 3.43213 20.96 2.49365 18.6943C1.55518 16.4287 1.30963 13.9356 1.78806 11.5303C2.26649 9.1251 3.44741 6.91575 5.18149 5.18167C6.91557 3.4476 9.12492 2.26667 11.5302 1.78824C13.9354 1.30981 16.4285 1.55536 18.6942 2.49384C20.9598 3.43231 22.8964 5.02157 24.2588 7.06063C25.6213 9.09969 26.3485 11.497 26.3485 13.9493M26.4985 13.9491L26.3485 13.9493M26.4985 13.9491C26.4985 13.9492 26.4985 13.9493 26.4985 13.9493H26.3485M4.79964 13.9493C4.79964 12.1397 5.33625 10.3708 6.34161 8.86614C7.34697 7.36151 8.77593 6.18879 10.4478 5.49629C12.1196 4.80379 13.9593 4.6226 15.7341 4.97563C17.509 5.32867 19.1392 6.20007 20.4188 7.47965C21.6984 8.75923 22.5698 10.3895 22.9228 12.1643C23.2759 13.9392 23.0947 15.7788 22.4022 17.4507C21.7097 19.1225 20.537 20.5515 19.0323 21.5569C17.5277 22.5622 15.7587 23.0988 13.9491 23.0988C11.5225 23.0988 9.19533 22.1349 7.47947 20.419C5.76361 18.7031 4.79964 16.3759 4.79964 13.9493Z"
                  stroke="#F5F5F7"
                  stroke-width="1"
                />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </header>
  );
}
