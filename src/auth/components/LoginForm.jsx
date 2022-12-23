import { useMutation } from "@apollo/client"
import React, { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import { loginUser } from "../../graphql/queries"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSnackbar } from "notistack"
import { AuthContext } from "../context"
import { RecoverPasswordModal } from "./RecoverPasswordModal"

const schema = yup.object({
     email: yup.string().email().required(),
     password: yup.string().required(),
})

export const LoginForm = () => {
     const { token } = useParams()
     const [isModalOpen, setIsModalOpen] = useState(token === "log" ? false : true)
     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)
     const {
          register,
          handleSubmit,
          getValues,
          formState: { errors },
     } = useForm({ resolver: yupResolver(schema) })
     const [postLogin, { error, data }] = useMutation(loginUser)
     const { onLogin } = useContext(AuthContext)
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
          const password = getValues('password')
          localStorage.setItem("bookUser", JSON.stringify({...data.userLogin, password}))
          onLogin({...data.userLogin, password })
          if(data.userLogin.isSuperuser) return navigate(`/admin/user/upload`)
          navigate(`/admin/user`)
     }, [data])

     useEffect(() => {
          if (!error) return
          enqueueSnackbar("Ha ocurrido un error en la autenticación", {
               className: "snackbar-auth",
               anchorOrigin: { horizontal: "right", vertical: "top" },
          })
     }, [error])

     const onSubmit = (formData) => {
          postLogin({
               variables: {
                    email: formData.email,
                    password: formData.password,
               },
          })
     }
     return (
          <>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='form-title'>Inicia Sesión</h1>
                    <input
                         type='text'
                         {...register("email")}
                         className='login-input orange-input'
                         placeholder='Correo Electrónico'
                    />
                    <input
                         type='text'
                         {...register("password")}
                         className='login-input red-input'
                         placeholder='Contraseña'
                    />
                    <span className='auth-span question-span' onClick={openModal}>
                         ¿Olvidaste tu contraseña?
                    </span>
                    <span className='auth-span' style={{ textDecoration: "none" }}>
                         ¿No tienes una cuenta aún?
                         <Link to={"/auth/registrarse/log"} className='auth-a'>
                              Registrate aquí
                         </Link>
                    </span>
                    <div className='auth-btn-container'>
                         <button type='submit' className='auth-button'>
                              Iniciar Sesión
                         </button>
                    </div>
               </form>
               {isModalOpen && <RecoverPasswordModal closeModal={closeModal} />}
          </>
     )
}
