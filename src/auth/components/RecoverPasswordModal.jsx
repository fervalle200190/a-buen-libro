import { useSnackbar } from "notistack"
import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useEmail, useNewPassword } from "../../hooks"
import { AuthContext } from "../context"

export const RecoverPasswordModal = ({ closeModal }) => { 
     const { onLogin } = useContext(AuthContext)
     const { register, handleSubmit } = useForm()
     const emailMutation = useEmail()
     const passwordMutation = useNewPassword()
     const navigate = useNavigate()
     const { enqueueSnackbar } = useSnackbar()
     const params = useParams()

     const onSubmit = (d) => {
          emailMutation.mutate({ email: d.email })
     }

     const onNewPassword = (d) => {
          passwordMutation.mutate({ token: params.token, password: d.password })
     }

     useEffect(() => {
          if (!emailMutation.data) return
          enqueueSnackbar("Ha sido enviado un correo", {
               className: "snackbar-auth",
               anchorOrigin: { horizontal: "right", vertical: "top" },
          })
     }, [emailMutation.data])

     useEffect(() => {
          if (!passwordMutation.data) return
          enqueueSnackbar(passwordMutation.data.message, {
               className: "snackbar-auth",
               anchorOrigin: { horizontal: "right", vertical: "top" },
          })
          navigate("/")
          onLogin({ username: passwordMutation.data.username })
     }, [passwordMutation.data])

     return (
          <div className={"recover-modal"} onClick={closeModal}>
               <div className='bg-recover-modal' onClick={(e) => e.stopPropagation()}>
                    {params.token === "log" ? (
                         <form onSubmit={handleSubmit(onSubmit)}>
                              <h1 className='form-title'>Ingresa tu correo electronico</h1>
                              <input
                                   type='text'
                                   {...register("email")}
                                   className='login-input orange-input recover-input'
                                   placeholder='Correo Electronico'
                              />
                              <button type='submit' className='recover-password-btn'>
                                   Recuperar contraseña
                              </button>
                         </form>
                    ) : (
                         <form onSubmit={handleSubmit(onNewPassword)}>
                              <h1 className='form-title'>Ingresa tu nueva contraseña</h1>
                              <input
                                   type='text'
                                   {...register("password")}
                                   className='login-input orange-input recover-input'
                                   placeholder='Nueva contraseña'
                              />
                              <button type='submit' className='recover-password-btn'>
                                   Crear nueva contraseña
                              </button>
                         </form>
                    )}
               </div>
          </div>
     )
}
