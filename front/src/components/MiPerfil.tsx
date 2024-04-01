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
import { useState, useEffect } from "react";
import imgUserDefault from "@/images/userDefault.svg";
import Image from "next/image";

import Logo from "@/images/logoalquileresya.svg";
import Notificacion from "@/images/notificacion.svg";
import Configuracion from "@/images/configuracion.svg";
import agregarFoto from "@/images/agregarFoto.svg";
import { Separator } from "@/components/ui/separator";
import { instanceAxios } from "@/lib/axios";

const formSchema = z.object({
  nombre: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "El nombre debe tener al menos 2 caracteres",
    })
    .max(50),
  apellido: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "El apellido debe tener al menos 2 caracteres",
    })
    .max(50),
  pais: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "El país debe tener al menos 2 caracteres",
    })
    .max(50),
  ciudad: z
    .string({
      required_error: "Campo requerido",
    })
    .min(2, {
      message: "La ciudad debe tener al menos 2 caracteres",
    })
    .max(50),
  direccion: z
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
  telefono: z
    .string({
      required_error: "Campo requerido",
    })
    .min(6, {
      message: "El número teléfono debe tener al menos 6 caracteres",
    })
    .max(50),
});

type UserData = {
  nombre: string;
  apellido: string;
  ciudad: string;
  pais: string;
  direccion: string;
  email: string;
  telefono: string;
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
  favourites: any[];
  token: string;
}

const MiPerfil: React.FC<ProfileFormProps> = ({ userData = {} }) => {
  const [isEditing, setEditing] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      pais: "",
      ciudad: "",
      direccion: "",
      email: "",
      telefono: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue("nombre", user.firstName);
      form.setValue("apellido", user.lastName);
      //En el User del sessionStorage no se almacena el país
      form.setValue("pais", user.city);
      form.setValue("ciudad", user.city);
      form.setValue("direccion", user.address);
      form.setValue("email", user.email);
      form.setValue("telefono", user.phone);
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
    // instanceAxios.put(`/users/${id}}`, values)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
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

      <div className="flex flex-col sm:flex-row mx-auto sm:mx-0 gap-4 sm:gap-12">
        <div className="flex flex-col bg-[#F0F1F5] pb-10 flex-block sm:hidden w-screen">
          <h1 className="font-bold text-[16px] mt-8 text-center">Mi Perfil</h1>
          <div className="flex justify-center gap-6 items-center mt-5">
            <Image
              src={user?.profilePicture || imgUserDefault}
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
              <p>No hay usuario</p>
            )}
          </div>
        </div>

        <aside className="  bg-[#F0F1F5]  w-[408px] hidden sm:flex h-screen">
          <div className="flex flex-col  mx-auto gap-5 items-center mt-10">
            <div className="flex   ">
              <Image
                src={user?.profilePicture || imgUserDefault}
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
              </div>
            ) : (
              <p>No hay usuario</p>
            )}
          </div>
        </aside>

        <main className="flex-1 p-4 mx-auto ">
          <h1 className="font-bold text-4xl mb-3 hidden sm:flex">Mi Perfil</h1>
          <h2 className="font-bold text-2xl mb-6">Datos Personales</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-x-4 gap-y-6 w-[330px]"
            >
              {user && (
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="apellido"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ciudad"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ciudad"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="direccion"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-1">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <h2 className="font-bold text-2xl ">Datos de Contacto</h2>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-2">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefono"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-2">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[330px] mt-4">
              {user ? (
                <Button
                  className="justify-center w-[330px] text-[14px] font-semibold"
                  variant="default"
                  size="lg"
                >
                  Editar Perfil
                </Button>
              ) : (
                <>
                  <Button
                    className="mt-6 justify-self-start w-[156px] text-[14px] font-semibold"
                    variant="outline"
                    size="lg"
                  >
                    Editar Perfil
                  </Button>

                  <Button
                    className="mt-6 justify-self-end w-[156px] text-[14px] font-semibold"
                    variant="default"
                    size="lg"
                  >
                    Guardar cambios
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
