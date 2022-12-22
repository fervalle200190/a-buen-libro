import { authTypes } from "./types/authTypes"

export const authReducer = (state, { type, payload }) => {
     switch (type) {
          case authTypes.login:
               return {
                    ...state,
                    logged: true,
                    user: payload,
                    isAuthenticating: false,
               }
          case authTypes.logout:
               return {
                    ...state,
                    logged: false,
                    user: null,
                    isAuthenticating: false,
               }
          case authTypes.startAuth:
               return {
                    ...state,
                    isAuthenticating: true,
               }
          case authTypes.stopAuth:
               return {
                    ...state,
                    isAuthenticating: false,
               }
          default:
               return state
     }
}
