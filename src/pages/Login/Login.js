import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForms from '../../hooks/useForms'

import { ContainerForm, ContainerLogin, Input } from './styled'
import { irParaCadastro, irParaFeed } from '../../routes/coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function Login() {
  const navigate = useNavigate()

  const {form, onChange, limparCampos}= useForms({ email: "", password: "" })

  const enviaLogin = async (e) => {
    e.preventDefault()
    console.log(form)

    try {
      const response = await axios.post(`${BASE_URL}/users/login`, form)
      localStorage.setItem("token", response.data.token)
      limparCampos()
      irParaFeed(navigate)

      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input id='email'
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
        />
        <label htmlFor='senha'>Senha:</label>
        <Input id='senha'
          name="password"
          minLength={8}
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
