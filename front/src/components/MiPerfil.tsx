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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

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
    <div className="flex flex-wrap">
      <header className="bg-blue-600 h-[112px] w-full "> </header>

      <div className="flex flex-row">
        <aside className="flex flex-col items-center bg-gray-100 p-4 w-[408px] ">
          <div className="relative flex items-end justify-end">
            <Avatar className=" h-[215px] w-[215px] item-center mt-16 ">
              <AvatarImage src="/j.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <img
              src="/agregarfoto.png"
              alt="Botón Agregar Foto"
              className="absolute flex items-center justify-center -mr-8 "
            />
          </div>
          <h2 className="font-semibold text-3xl mt-5">Juan Perez</h2>
          <img src="/inquilino.png" alt="" className="w-[184px] mt-5 " />
        </aside>
      </div>

      <main className="flex-1 p-4 pl-12">
        <h1 className="font-semibold text-3xl py-5">Mi Perfil</h1>
        <h2 className="font-semibold text-2xl pb-4">Datos Personales</h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-x-4 gap-y-6 w-[460px]"
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

            <h2>Datos de Contacto</h2>
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[460px]">
            <Button
              className="mt-6 justify-self-start"
              variant="outline"
              size="lg"
            >
              Editar Perfil
            </Button>

            <Button
              className="mt-6 justify-self-end"
              variant="default"
              size="lg"
            >
              Guardar cambios
            </Button>
          </div>
        </Form>
      </main>
    </div>
  );
};

export default MiPerfil;
