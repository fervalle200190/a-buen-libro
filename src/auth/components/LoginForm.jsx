import React from "react"
import { useForm } from "react-hook-form"

export const LoginForm = () => {
     const { register, handleSubmit } = useForm()

     const onSubmit = (d) => {
          console.log(d)
     }
     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <h1 className="form-title">Inicia Sesión</h1>
               <input
                    type='text'
                    {...register("email")}
                    className='login-input orange-input'
                    placeholder='Correo Electronico'
               />
               <input
                    type='text'
                    {...register("password")}
                    className='login-input red-input'
                    placeholder='Contrasena'
               />
               <a className="question-span">¿Olvidaste tu contraseña?</a>
               {/* <button type='submit'>Guardar</button> */}
          </form>
     )
}
