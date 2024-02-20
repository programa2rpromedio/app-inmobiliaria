"use client"
import Link from "next/link";
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
  email: z.string().email({
    message: "Email inválido",
  }).min(1, {
    message: "Campo requerido",
  }),
  contraseña: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres",
  }),
})

export default function IniciarSesion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      contraseña: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-6 p-8">
      <h1 className="font-semibold text-3xl">Crear cuenta</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-center justify-between gap-x-4 gap-y-8 w-[460px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={form.control.getFieldState("email").isDirty ? " text-sm -top-6 -left-0" : ""}>
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
            render={({ field }) => (
              <FormItem className="col-span-2 mt-2">
                <FormLabel className={form.control.getFieldState("contraseña").isDirty ? " text-sm -top-6 -left-0" : ""}>
                  Contraseña
                </FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="col-span-2 w-full" variant="default" size="lg">
            Iniciar sesión
          </Button>
        </form>
      </Form>
      <div className="flex flex-col justify-center items-center text-sm">
        <p>¿No tienes una cuenta?</p>
        <p className="font-semibold hover:text-primary transition-colors"><Link href="/registrar">Regístrate</Link></p>
      </div>
    </div>
  )
}
