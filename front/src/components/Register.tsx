"use client"
import { useState } from "react"
import Link from "next/link";
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
import { baseURL, instanceAxios } from "@/lib/axios";


const formSchema = z.object({
  firstName: z.string({
    required_error: "Campo requerido",
  }).min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }).max(50),
  lastName: z.string({
    required_error: "Campo requerido",
  }).min(2, {
    message: "El apellido debe tener al menos 2 caracteres",
  }).max(50),
  email: z.string().email({
    message: "Email inválido",
  }).min(1, {
    message: "Campo requerido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres",
  }),
  confirmarContraseña: z.string({
    invalid_type_error: "Las contraseñas no coinciden",
  }).min(6, {
    message: "La contraseña debe ser de al menos 6 caracteres",
  }),
  role: z.enum(["tenant", "owner"], {
    required_error: "Campo requerido",
  }),
  city: z.string().min(1, {
    message: "Campo requerido",
  }),
  address: z.string().min(1, {
    message: "Campo requerido",
  }),
  phone: z.string().min(1, {
    message: "Campo requerido",
  }),
}).refine(data => data.password === data.confirmarContraseña, {
  message: "Las contraseñas no coinciden",
  path: ["confirmarContraseña"],
})


export default function Register() {
  const [step, setStep] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmarContraseña: "",
      role: undefined,
      city: "",
      address: "",
      phone: "",
    },
  })

  const handleNext = () => {
    const values = form.getValues()
    if (values.firstName === "" || values.lastName === "" || values.email === "" || values.password === "" || values.confirmarContraseña === "" || values.role === undefined) {
      form.trigger()
      return
    }
    if (values.password !== values.confirmarContraseña) {
      return
    }
    setStep(step + 1)
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values);

    try {
      const response = await instanceAxios.post('/auth/register', values)
      console.log(response)
      if (response.status === 201) window.location.href = `http://localhost:3000/iniciar-sesion`

    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="flex flex-col justify-center items-center gap-y-6 p-8 pb-0 sm:pb-8">
      <h1 className="font-bold text-[2rem]">Crear cuenta</h1>
      <Progress value={(step / 2) * 100} className="w-[346px] mb-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 items-center justify-between gap-x-4 gap-y-8 sm:w-[350px]  md:w-[460px] xl:w-[40vw] sm:h-min ">
          {step === 1 && (
            <>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={form.control.getFieldState("firstName").isDirty ? " text-sm -top-6 -left-0" : ""} >
                      Nombre
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
                name="lastName"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className={form.control.getFieldState("lastName").isDirty ? " text-sm -top-6 -left-0" : ""}>
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
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-2">
                    <FormLabel className={form.control.getFieldState("password").isDirty ? " text-sm -top-6 -left-0" : ""}>
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
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-2">
                    <FormLabel className={form.control.getFieldState("confirmarContraseña").isDirty ? " text-sm -top-6 -left-0" : ""}>
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
                name="role"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-2">
                    <FormLabel className={field.value ? " text-sm -top-6 -left-0" : ""}>
                      Rol
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tenant">Inquilino</SelectItem>
                        <SelectItem value="owner">Propietario</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {step === 2 && (
            <>
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className={field.value ? " text-sm -top-6 -left-0" : ""}>
                      Ciudad de residencia
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
                name="address"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className={field.value ? " text-sm -top-6 -left-0" : ""}>
                      Dirección
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
                name="phone"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel className={field.value ? " text-sm -top-6 -left-0" : ""}>
                      Teléfono
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {
            step > 1 ? (
              <Button type="submit" className="col-span-2 w-full" variant="default" size="lg">
                Registrarse
              </Button>) : (
              <Button onClick={handleNext} className="col-span-2 w-full" variant="outline" size="lg">
                Siguiente
              </Button>
            )}

        </form>
      </Form>
      <div className="flex flex-col justify-center items-center text-sm">
        <p>¿Ya tienes una cuenta?</p>
        <p className="font-semibold hover:text-primary transition-colors"><Link href="/iniciar-sesion">Inicia sesión</Link></p>
      </div>
    </div>
  )
}
