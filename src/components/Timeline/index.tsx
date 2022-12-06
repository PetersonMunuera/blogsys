import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { Post } from "../Post"
import styles from './styles.module.scss'

type PostProps = {
  id: number,
  userId: number,
  title: string,
  body: string
}

export function Timeline() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    getPosts()
  }, [])

  async function getPosts() {
    try {
      const { data: postsData } = await api.get('/posts')
      
      if (!postsData) return
  
      setPosts(postsData)
    } catch (error) {
      console.log(`Erro ao buscar posts: ${error}`)
    }
  }

  return (
    <ul className={styles.container}>
      {posts.map(post => (
        <Post 
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
          body={post.body}
        />
      ))}
    </ul>
  )
}