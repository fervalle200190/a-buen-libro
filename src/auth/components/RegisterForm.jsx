import { useMutation } from "@apollo/client"
import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../graphql/queries"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useSnackbar } from "notistack"
import { AuthContext } from "../context"

const schema = yup.object({
     email: yup.string().email().required("El correo es requerido"),
     password: yup
          .string()
          .min(8, "Debe tener una longitud mayor a 8 caracteres")
          .required("La clave es requerida"),
     confirmPassword: yup
          .string()
          .oneOf([yup.ref("password")], "La contraseña no coincide")
          .required("Confirma la contraseña"),
     name: yup.string().required("El nombre es requerido"),
     lastName: yup.string().required("El apellido es requerido"),
})

export const RegisterForm = () => {
     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({ resolver: yupResolver(schema) })
     const { onLogin } = useContext(AuthContext)
     const [postUser, { data, error }] = useMutation(registerUser)
     const { enqueueSnackbar } = useSnackbar()
     const navigate = useNavigate()

     useEffect(() => {
          if (Object.keys(errors).length === 0) return
          for (const err in errors) {
               enqueueSnackbar(errors[err].message, {
                    className: "snackbar-auth",
                    anchorOrigin: { horizontal: "right", vertical: "top" },
               })
          }
     }, [errors])

     useEffect(() => {
          if (!data) return
          localStorage.setItem("bookUser", JSON.stringify(data.createUser))
          onLogin(data.createUser)
          navigate(`/`)
     }, [data])

     useEffect(() => {
          if (!error) return
          enqueueSnackbar("Ha ocurrido un error en el registro", {
               className: "snackbar-auth",
               anchorOrigin: { horizontal: "right", vertical: "top" },
          })
     }, [error])

     const onSubmit = (formData) => {
          postUser({
               variables: {
                    email: formData.email,
                    password: formData.password,
                    name: formData.name,
                    lastName: formData.lastName,
               },
          })
     }
     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <h1 className='form-title'>Registrate ahora</h1>
               <input
                    type='text'
                    {...register("name")}
                    className='login-input orange-input'
                    placeholder='Nombre'
               />
               <input
                    type='text'
                    {...register("lastName")}
                    className='login-input red-input'
                    placeholder='Apellido'
               />
               <input
                    type='email'
                    {...register("email")}
                    className='login-input brown-input'
                    placeholder='Correo Electrónico'
               />
               <input
                    type='text'
                    {...register("password")}
                    className='login-input orange-input'
                    placeholder='Contraseña'
               />
               <input
                    type='text'
                    {...register("confirmPassword")}
                    className='login-input red-input'
                    placeholder='Confirmar contraseña'
               />
               <span className='auth-span' style={{ textDecoration: "none" }}>
                    ¿Ya tienes una cuenta?
                    <Link to={"/auth/ingresar/log"} className='auth-a'>
                         Inicia sesión aquí
                    </Link>
               </span>
               <div className='auth-btn-container'>
                    <button type='submit' className='auth-button'>
                         Registrarse
                    </button>
               </div>
          </form>
     )
}
