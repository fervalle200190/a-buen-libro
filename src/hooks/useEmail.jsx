import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const postEmail = async (email) => {
     const { data } = await axios.post(`https://www.abuenlibro.cl/api/change_pass_request`, email)
     return data
}

export const useEmail = () => {
     const emailMutation = useMutation({ mutationFn: (email) => postEmail(email) })
     return emailMutation
}
