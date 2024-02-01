"use client"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { isDirty, z } from "zod"


const formSchema = z.object({
  nombre: z.string({
    required_error: "Campo requerido",
  }).min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }).max(50),
  apellido: z.string({
    required_error: "Campo requerido",
  }).min(2, {
    message: "El apellido debe tener al menos 2 caracteres",
  }).max(50),
  email: z.string().email({
    message: "Email inválido",
  }).min(1, {
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
})


export default function Register() {
  

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
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {    
    console.log(values)
  }

  return (
    
    <div className="flex flex-col justify-center items-center gap-y-6 p-8">
      <h1 className="font-semibold text-3xl">Crear cuenta</h1>
      <Progress value={50} className="w-[346px] mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-center justify-between gap-x-4 gap-y-8 w-[460px]">
          <FormField
            control={form.control}
            name="nombre"            
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className={form.control.getFieldState("nombre").isDirty ? " text-sm -top-6 -left-0" : "" } >
                  Nombre
                </FormLabel>
                <FormControl>
                  <Input {...field}  />
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
                <FormLabel className={form.control.getFieldState("apellido").isDirty ? " text-sm -top-6 -left-0" : "" }>
                  Apellido
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>                
                <FormMessage />
              </FormItem>
            )}            
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={form.control.getFieldState("email").isDirty ? " text-sm -top-6 -left-0" : "" }>
                  Email
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contraseña"
            render={({field}) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={form.control.getFieldState("contraseña").isDirty ? " text-sm -top-6 -left-0" : "" }>
                  Contraseña
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} 
          />
          <FormField
            control={form.control}
            name="confirmarContraseña"
            render={({field}) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={form.control.getFieldState("confirmarContraseña").isDirty ? " text-sm -top-6 -left-0" : "" }>
                  Confirmar contraseña
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rol"
            render={({field}) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={field.value ? " text-sm -top-6 -left-0" : "" }>
                  Rol
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Inquilino">Inquilino</SelectItem>
                    <SelectItem value="Propietario">Propietario</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-2 w-full" variant="outline" size="lg">Siguiente</Button>
        </form>
      </Form>
      <div className="flex flex-col justify-center items-center text-sm">
        <p>¿Ya tienes una cuenta?</p>
        <p className="font-semibold">Inicia sesión</p>
      </div>
    </div>
  )
}
