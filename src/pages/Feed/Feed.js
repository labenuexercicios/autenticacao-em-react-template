import React, { useEffect } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import CriarPost from '../../components/CriarPost/CriarPost'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage'


export default function Feed() {
  useProtectedPage()

  const [posts, receberDados] = useRequestData([], '/posts')

  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CriarPost receberDados={receberDados}/>
      </section>
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
