import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/BASE_URL'
import axios from 'axios'



export default function useRequestData(estadoInicial, path) {

    const [dados, setDados] = useState(estadoInicial)
    const [erro, setErro] = useState('')

    const receberDados = () =>{
        const token = localStorage.getItem("token")

        axios.get(`${BASE_URL}${path}`,{
            headers:{
                Authorization:token 
            }
        })
        .then((resposta) => {
            setDados(resposta.data)
        })
        .catch((erro) => {
            console.log(erro.response)
            setErro(erro.response)
        })
    }
    
    useEffect(() => {
        receberDados()
    }, [path])

    return [dados, receberDados, erro]
}
