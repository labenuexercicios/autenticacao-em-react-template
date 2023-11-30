import { useNavigate } from "react-router-dom"
import { irParaLogin } from "../routes/coordinator"
import { useEffect } from "react"


export default function useProtectedPage() {
    const navigate = useNavigate()

    const protectedPage = () => {
        const token = localStorage.getItem("token")

        if (!token) {
            irParaLogin(navigate)
        }
    }

    useEffect(() => {
        protectedPage()
    }, [navigate])
}