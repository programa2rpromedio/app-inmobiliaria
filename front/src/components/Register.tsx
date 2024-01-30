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
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  nombre: z.string().min(2).max(50),
  apellido: z.string().min(2).max(50),
})


export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {    
    console.log(values)
  }
  return (
    
    <div className="flex flex-col justify-center items-center gap-y-6">
      <h1 className="font-semibold text-3xl">Crear cuenta</h1>
      <Progress value={50} className="w-[346px]" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8 w-[460px]">
          <FormField
            control={form.control}
            name="nombre"            
            render={({ field }) => (
              <FormItem className="max-w-[220px]">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem className="max-w-[220px]">
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>                
                <FormMessage />
              </FormItem>
            )}            
          />
          <Button type="submit" className="w-full" variant="outline" size="lg">Siguiente</Button>
        </form>
      </Form>
      <div className="flex flex-col justify-center items-center text-sm">
        <p>¿Ya tienes una cuenta?</p>
        <p className="font-semibold">Inicia sesión</p>
      </div>
    </div>
  )
}
