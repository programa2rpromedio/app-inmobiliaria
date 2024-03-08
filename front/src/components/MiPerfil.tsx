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
import { Badge } from "@/components/ui/badge";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import imgAvatar from "@/images/juan.svg";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import Notificacion from "@/images/notificacion.svg";
import Configuracion from "@/images/configuracion.svg";
import { Separator } from "@/components/ui/separator";

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

const MiPerfil: React.FC<ProfileFormProps> = ({ userData = {} }) => {
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

  const [isEditing, setEditing] = useState(false);

  const [formData, setFormData] = useState<UserData>({
    nombre: userData.nombre || "",
    apellido: userData.apellido || "",
    ciudad: userData.ciudad || "",
    pais: userData.pais || "",
    direccion: userData.direccion || "",
    email: userData.email || "",
    telefono: userData.telefono || "",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex flex-col h-screen ">
      <div className="bg-[#3354FF] h-[152px] flex-block sm:hidden "></div>

      <div className=" bg-[#8E8E8E]/15  h-[152px] hidden sm:flex shadow-lg">
        <div className="flex items-center container justify-between ">
          <div className="flex items-center container justify-between ">
            <div className="flex  items-center">
              <div className="flex items-center">
                <Image
                  src={Logo}
                  alt="Logo de la App"
                  className=""
                  width={72}
                  height={72}
                />
                <p className="text-[17px] font-semibold m-4"> Alquileres Ya!</p>
              </div>
              <div className="flex mx-auto divide-y ">
                <Image
                  src={Notificacion}
                  alt="Icono Notificacion"
                  className=""
                  width={40}
                  height={40}
                />
                <Separator
                  orientation="vertical"
                  className="h-[40px] mx-4  border-[#C2C0C7] border-[1px] "
                />
                <Image
                  src={Configuracion}
                  alt="Icono Notificacion"
                  className=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <Image
          src={imgAvatar}
          alt="Avatar del Usuario"
          className="rounded-[100%] shadow-xl"
          width={72}
          height={72}
        />
      </div>

      <div className="flex flex-col bg-[#F0F1F5] pb-10">
        <h1 className="font-bold text-[16px] mt-8 text-center">Mi Perfil</h1>
        <div className="flex justify-center gap-6 items-center mt-5">
          <Image
            src={imgAvatar}
            alt="Avatar del Usuario"
            className="rounded-[100%] shadow-xl"
            width={72}
            height={72}
          />

          <div className="flex flex-col gap-4 items-center ">
            <h2 className="font-semibold text-[20px] text-[#08367D]">
              Juan Perez
            </h2>
            <Badge
              variant="outline"
              className="bg-[#6ABAA3] rounded-[22px] w-[86px] h-[22px] text-[12px] text-[#F6F6F6] "
            >
              Inquilino
            </Badge>
          </div>
        </div>
      </div>

      <main className="flex-1 p-4 ">
        <h2 className="font-bold text-2xl mb-6">Datos Personales</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-4 gap-y-6 w-[330px]"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Nombre</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="apellido"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Apellido</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pais"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel className="">Pais</FormLabel>
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
                  <FormLabel className="">Ciudad</FormLabel>
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
                  <FormLabel className="">Dirección</FormLabel>
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
                  <FormLabel className="">Correo Electrónico</FormLabel>
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
                <FormItem className="col-span-2">
                  <FormLabel className="">Teléfono</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[330px]">
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

            <Button
              className=" justify-center w-[330px] text-[14px] font-semibold"
              variant="default"
              size="lg"
            >
              Editar Perfil
            </Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default MiPerfil;
