/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FileInput } from "flowbite-react";
import Logo from "@/images/logoalquileresya.svg";
import Notificacion from "@/images/notificacion.svg";
import Configuracion from "@/images/configuracion.svg";
import agregarFoto from "@/images/agregarFoto.svg";
import { Separator } from "@/components/ui/separator";
import { instanceAxios } from "@/lib/axios";
import userDefault from "@/images/userDefault.png";
import Link from "next/link";


const formSchema = z.object({
  firtName: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(50),
  lastName: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "El apellido debe tener al menos 2 caracteres",
    })
    .max(50),
  city: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "La ciudad debe tener al menos 2 caracteres",
    })
    .max(50),
  address: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "La dirección debe tener al menos 2 caracteres",
    })
    .max(50),
  email: z
    .string()
    .email({
      message: "Email inválido",
    })
    .min(1, {
      message: "Campo requerido",
    }),
  phone: z
    .string({
      required_error: "Campo requerido",
    })
    .min(6, {
      message: "El número teléfono debe tener al menos 6 caracteres",
    })
    .max(50),
});

type UserData = {
  firtName: string;
  lastName: string;
  city: string;
  address: string;
  email: string;
  phone: string;
};

interface ProfileFormProps {
  userData: UserData;
}

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

const ModalNoUser = () => {
  const refModal = useRef(null);

  const closeModal = () => {
    if (refModal.current == null) return;
    window.location.href = "/propiedades";
  };

  return (
    <div
      ref={refModal}
      onClick={closeModal}
      className="z-30 min-h-[100vh] h-full w-[100vw] bg-[#2222223c] absolute left-0 top-0 flex justify-center items-center"
    >
      <div className="bg-[#fff]  w-[90%] sm:w-[50%] rounded-[1rem]">
        <div className="p-2 cursor-pointer" onClick={closeModal}>
          X
        </div>
        <div className="p-4 flex flex-col items-center gap-5">
          <>
            <strong>❌</strong>
            <h2 className="font-bold text-[#d94242] text-[1.2rem]">
              ¡No iniciaste sesion!{" "}
            </h2>
            <h3>Vuelva a intentarlo.</h3>
            <Button
              variant="default"
              size="lg"
              className="bg-[#d94242] hover:bg-[#d94242d1]"
            >
              Iniciar Sesion
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

const MiPerfil: React.FC<ProfileFormProps> = ({ userData = {} }) => {
  const [isEditing, setEditing] = useState(false);
  const [user, setUser] = useState<User>();
  const refFormImage = useRef(null);
  const formData = new FormData();
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (user) {
      form.setValue("firtName", user.firstName);
      form.setValue("lastName", user.lastName);
      form.setValue("city", user.city);
      form.setValue("address", user.address);
      form.setValue("email", user.email);
      form.setValue("phone", user.phone);
    }
  }, [user, form]);

  function traducirRol(rol: string) {
    switch (rol) {
      case "tenant":
        return "Inquilino";
      case "owner":
        return "Propietario";
      default:
        return rol;
    }
  }

  // Mandar la actualizacion de los campos al back
  function onSubmit(values: z.infer<typeof formSchema>) {
    instanceAxios
      .put(`/users/${user?._id}`, values, {
        headers: { Authorization: user?.token },
      })
      .then((res) => {
        if (res.data) {
          setUser((prev) => ({
            _id: res.data._id as string,
            firstName: res.data.first_name as string,
            lastName: res.data.last_name as string,
            email: res.data.email as string,
            profilePicture: res.data.profile_picture as any,
            role: res.data.role as string,
            city: res.data.location.city as string,
            address: res.data.location.address as string,
            phone: res.data.phone as string,
            token: (prev?.token as string) || "",
          }));
        }
      })
      .catch((err) => console.log(err));

    if (refFormImage.current) {
      let file = refFormImage.current as HTMLFormElement;
      formData.append("image", file.files[0]);
      instanceAxios
        .patch(`/users/${user?._id}/update-image`, formData, {
          headers: { Authorization: user?.token },
        })
        .then((res) => {
          if (res.data) {
            setUser((prev) => ({
              _id: res.data._id as string,
              firstName: res.data.first_name as string,
              lastName: res.data.last_name as string,
              email: res.data.email as string,
              profilePicture: res.data.profile_picture as any,
              role: res.data.role as string,
              city: res.data.location.city as string,
              address: res.data.location.address as string,
              phone: res.data.phone as string,
              token: (prev?.token as string) || "",
            }));
          }
        })
        .catch((err) => console.log(err));
    }
  }

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
              src={userDefault}
              alt="Avatar del Usuario"
              className="rounded-[100%] shadow-xl"
              width={76}
              height={76}
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col sm:flex-row mx-auto sm:mx-0 gap-4 sm:gap-12">
        <div className="flex flex-col bg-[#F0F1F5] pb-10 flex-block sm:hidden w-screen">
          <h1 className="font-bold text-[16px] mt-8 text-center">Mi Perfil</h1>
          <div className="flex justify-center gap-6 items-center mt-5">
            <Image
              src={userDefault}
              alt="Avatar del Usuario"
              className="rounded-[100%] shadow-xl"
              width={72}
              height={72}
            />
            {user ? (
              <div className="flex flex-col gap-4 items-center ">
                <h2 className="font-semibold text-[20px] text-[#08367D]">
                  {user.firstName + " " + user.lastName}
                </h2>
                <p className="bg-[#6ABAA3] text-center p-[3px] rounded-[22px] w-[86px] h-[22px] text-[12px] text-[#F6F6F6] ">
                  {traducirRol(user.role)}
                </p>
              </div>
            ) : (
              <ModalNoUser />
            )}
          </div>
        </div>

        <aside className="  bg-[#F0F1F5]  w-[408px] hidden sm:flex h-screen">
          <div className="flex flex-col  mx-auto gap-5 items-center mt-10">
            <div className="flex   ">
              <Image
                src={userDefault}
                alt="Avatar del Usuario"
                className="rounded-[100%] shadow-xl"
                width={235}
                height={235}
              />
              <div className="flex absolute justify-center rounded-[100%] shadow-lg  bg-white h-[64px] w-[64px] ml-[170px] mt-[155px]">
                <Image
                  src={agregarFoto}
                  alt="Icono Agregar foto"
                  className="rounded-[100%] shadow-xl  bg-white"
                  width={38}
                  height={38}
                />
              </div>
            </div>
            {user ? (
              <div className="flex flex-col gap-4 items-center mb-8">
                <h2 className="font-bold text-[32px] text-[#242633]">
                  {user.firstName + " " + user.lastName}
                </h2>
                <p className="bg-[#6ABAA3] text-center p-[3px] rounded-[22px] w-[186px] h-[46px] text-[25px] text-[#F6F6F6] ">
                  {traducirRol(user.role)}
                </p>
                {user.role === 'tenant' ?
                  <Link href='perfil/favoritos' className="border-2 border-primary text-primary bg-background hover:bg-muted h-10 px-4 py-2 rounded-[22px]">Ver favoritos</Link>
                  :
                  <Link href='perfil/mispropiedades' className="border-2 border-primary text-primary bg-background hover:bg-muted h-10 px-4 py-2 rounded-[22px]">Mis Propiedades</Link>

                }
              </div>
            ) : (
              <ModalNoUser />
            )}
          </div>
        </aside>

        <main className="flex-1 p-4 mx-auto ">
          <h1 className="font-bold text-4xl mb-3 hidden sm:flex">Mi Perfil</h1>
          <h2 className="font-bold text-2xl mb-6">Datos Personales</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-wrap  gap-x-4 gap-y-6 "
            >
              {user && (
                <FormField
                  control={form.control}
                  name="firtName"
                  render={({ field }) => (
                    <FormItem className="w-1/3">
                      <FormControl>
                        <Input
                          {...field}
                          disabled={!isEditing ? true : false}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Input {...field} disabled={!isEditing ? true : false} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Input {...field} disabled={!isEditing ? true : false} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className=" w-1/3">
                    <FormControl>
                      <Input {...field} disabled={!isEditing ? true : false} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full">
                <h2 className="font-bold text-2xl ">Datos de Contacto</h2>
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Input {...field} disabled={!isEditing ? true : false} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Input {...field} disabled={!isEditing ? true : false} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-full">
                <label htmlFor="">Foto de perfil</label>
                <FileInput
                  id="imageProfile"
                  className="w-1/3"
                  name="image"
                  ref={refFormImage}
                  disabled={!isEditing ? true : false}
                />
              </div>

              {isEditing ? (
                <Button
                  className="mt-6  w-1/3 text-[14px] font-semibold"
                  variant="outline"
                  size="lg"
                  type="submit"
                >
                  Guardar cambios
                </Button>
              ) : null}
            </form>

            <div className=" gap-x-4 gap-y-6 w-full mt-4">
              {user ? (
                <Button
                  className="justify-center w-1/3 text-[14px] font-semibold"
                  variant="default"
                  size="lg"
                  onClick={() => setEditing(!isEditing)}
                >
                  {isEditing ? "Dejar de Editar" : "Editar Perfil"}
                </Button>
              ) : (
                <>
                  <Button
                    className="mt-6 justify-self-start w-[156px] text-[14px] font-semibold"
                    variant="outline"
                    size="lg"
                    onClick={() => setEditing(!isEditing)}
                  >
                    Editar Perfil
                  </Button>
                </>
              )}
            </div>
          </Form>
        </main>
      </div>
    </div>
  );
};

export default MiPerfil;
