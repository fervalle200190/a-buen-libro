import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const postNewPassword = async (password) => {
     const { data } = await axios.post(`https://www.abuenlibro.cl/api/change_password`, password)
     return data
}

export const useNewPassword = () => {
     const passwordMutation = useMutation({ mutationFn: (password) => postNewPassword(password) })

     return passwordMutation
}
