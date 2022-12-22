import { useSnackbar } from "notistack"
import React, { useEffect, useState } from "react"
import { useEmail } from "../../../hooks"
import VisibilityIcon from "../../../assets/visibility.svg"
import VisibilityOffIcon from "../../../assets/visibility_off.svg"

export const UserInfo = ({ user }) => {
     const emailMutation = useEmail()
     const { enqueueSnackbar } = useSnackbar()
     const [show, setShow] = useState(false)

     const onPasswordClick = () => setShow((show) => !show)

     const onChangePasswordClick = () => {
          emailMutation.mutate({ email: user.username })
     }

     useEffect(() => {
          if (!emailMutation.data) return
          enqueueSnackbar("Ha sido enviado un correo", {
               className: "snackbar-auth",
               anchorOrigin: { horizontal: "right", vertical: "top" },
          })
     }, [emailMutation.data])
     return (
          <div className='white-info-box'>
               <p>Nombre: {`${user.firstName} ${user.lastName}`}</p>
               <p>Correo electronico: {user.username}</p>
               <p onClick={onPasswordClick} className={'password-p'}>
                    Contraseña: {show ? user.password : "*****"}{" "}
                    <img
                         src={show ? VisibilityIcon : VisibilityOffIcon}
                         alt='show-toggle'
                         className='password-toggle'
                    />
               </p>
               <p
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={onChangePasswordClick}
               >
                    Cambiar contraseña
               </p>
          </div>
     )
}
