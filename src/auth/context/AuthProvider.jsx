import React, { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { authTypes } from "./types/authTypes"

const init = () => {
     return {
          logged: !!localStorage.getItem("bookUser"),
          user: localStorage.getItem("bookUser") && JSON.parse(localStorage.getItem("bookUser")),
          isAuthenticating: false,
     }
}

const initialState = {
     logged: false,
     user: null,
     isAuthenticating: false,
}

export const AuthProvider = ({ children }) => {
     const [state, dispatch] = useReducer(authReducer, initialState, init)

     const onLogin = (user) => {
          dispatch({ type: authTypes.login, payload: user })
     }

     const onLogout = () => {
          dispatch({ type: authTypes.logout })
     }

     const startAuth = ()=> {
          dispatch({type: authTypes.startAuth})
     }

     return (
          <AuthContext.Provider value={{ state, onLogin, onLogout, startAuth }}>
               {children}
          </AuthContext.Provider>
     )
}
