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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isDirty, z } from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
  email: z
    .string()
    .email({
      message: "Email inválido",
    })
    .min(1, {
      message: "Campo requerido",
    }),
  contraseña: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres",
  }),
  confirmarContraseña: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres",
  }),
  rol: z.enum(["Inquilino", "Propietario"], {
    required_error: "Campo requerido",
  }),
});

export default function MiPerfil() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      contraseña: "",
      confirmarContraseña: "",
      rol: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      <header className="bg-blue-600 h-[112px] w-full "> </header>

      <div className="container">
        <aside className="bg-gray-100 h-[1024px] w-[408px] flex flex-col items-center selection:text-center ">
          <Avatar className=" h-[215px] w-[215px] item-center mt-44 ">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold text-3xl mt-10">Juan Perez</h2>
          <Badge variant="outline" className="mt-2 text-xl bg-smerald-300">
            Inquilino
          </Badge>
        </aside>
      </div>

      <main className="d-flex ">
        <h1 className="font-semibold text-3xl">Mi Perfil</h1>
        <h2>Datos Personales</h2>
      </main>
    </div>
  );
}

//   <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-center justify-between gap-x-4 gap-y-8 w-[460px]">
//             <FormField
//               control={form.control}
//               name="nombre"
//               render={({ field }) => (
//                 <FormItem className="">
//                   <FormLabel className={form.control.getFieldState("nombre").isDirty ? " text-sm -top-6 -left-0" : "" } >
//                     Nombre
//                   </FormLabel>
//                   <FormControl>
//                     <Input {...field}  />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="apellido"
//               render={({ field }) => (
//                 <FormItem className="">
//                   <FormLabel className={form.control.getFieldState("apellido").isDirty ? " text-sm -top-6 -left-0" : "" }>
//                     Apellido
//                   </FormLabel>
//                   <FormControl>
//                     <Input {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="email"
//               render={({field}) => (
//                 <FormItem className="col-span-2 mt-2">
//                   <FormLabel className={form.control.getFieldState("email").isDirty ? " text-sm -top-6 -left-0" : "" }>
//                     Email
//                   </FormLabel>
//                   <FormControl>
//                     <Input {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="contraseña"
//               render={({field}) => (
//                 <FormItem className="col-span-2 mt-2">
//                   <FormLabel className={form.control.getFieldState("contraseña").isDirty ? " text-sm -top-6 -left-0" : "" }>
//                     Contraseña
//                   </FormLabel>
//                   <FormControl>
//                     <Input type="password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="confirmarContraseña"
//               render={({field}) => (
//                 <FormItem className="col-span-2 mt-2">
//                   <FormLabel className={form.control.getFieldState("confirmarContraseña").isDirty ? " text-sm -top-6 -left-0" : "" }>
//                     Confirmar contraseña
//                   </FormLabel>
//                   <FormControl>
//                     <Input type="password" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="rol"
//               render={({field}) => (
//                 <FormItem className="col-span-2 mt-2">
//                   <FormLabel className={field.value ? " text-sm -top-6 -left-0" : "" }>
//                     Rol
//                   </FormLabel>
//                   <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Inquilino">Inquilino</SelectItem>
//                       <SelectItem value="Propietario">Propietario</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="col-span-2 w-full" variant="outline" size="lg">Siguiente</Button>
//           </form>
//         </Form>
