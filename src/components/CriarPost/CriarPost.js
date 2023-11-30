import React from 'react'
import { FormPost, Input, TextArea } from './styled'
import useForms from '../../hooks/useForms'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'

export default function CriarPost({receberDados}) {
  const { form, onChange, limparCampos } = useForms(
    {
      title: "",
      body: ""
    }
  )

  const enviarPost = async (e) => {
    e.preventDefault()
    console.log("entrou", form)
   
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: token
        }
      })

      console.log(response);
      limparCampos()
      receberDados()



    } catch (error) {
      console.log(error);
    }

  }

  return (
    <FormPost onSubmit={enviarPost}>
      <label htmlFor='tituloPost'>Título:</label>
      <Input
        placeholder='digite um título para o seu post'
        id='tituloPost'
        name='title'
        value={form.title}
        onChange={onChange}
        required
      />
      <label htmlFor='textoPost'>Texto:</label>
      <TextArea
        placeholder='crie um post!'
        id='textoPost'
        name='body'
        value={form.body}
        onChange={onChange}
        required
      />
      <button>Enviar</button>
    </FormPost>
  )
}
