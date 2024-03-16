import axios from "axios"
import { LoginForm } from "../shared"

export const authenticate = async (data: LoginForm) => {
    return await axios
            .post('http://localhost:3001/login', {
                email: data.email,
                password: data.password,
            })
}