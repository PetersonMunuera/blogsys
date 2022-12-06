import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import styles from './styles.module.scss'

type PostProps = {
  id: number,
  userId: number,
  title: string,
  body: string
}

type CommentProps = {
  id: number,
  email: string,
  body: string
}

type AuthorProps = {
  name: string
}

export function Post(props: PostProps) {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [author, setAuthor] = useState<AuthorProps>({} as AuthorProps)
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    getComments(props.id)
    getAuthor(props.userId)
  }, [])

  async function getComments(postId: number) {
    try {
      const { data: commentsData } = await api.get(`/posts/${postId}/comments`)

      if (!commentsData) return

      setComments(commentsData)
    } catch (error) {
      console.log(`Erro ao buscar comentários do post: ${error}`)
    }
  }

  async function getAuthor(userId: number) {
    try {
      const { data: userData } = await api.get(`/users/${userId}`)

      if (!userData) return

      setAuthor(userData)
    } catch (error) {
      console.log(`Erro ao buscar usuário autor do post: ${error}`)
    }
  }

  function toggleComments() {
    setShowComments(!showComments)
  }

  return (
    <li className={styles.card}>
      <span>{author.name}</span>
      <h1>{props.title}</h1>
      <p>{props.body}</p>

      <button onClick={toggleComments} className={showComments ? styles.buttonActive : ''}>
        <small>{!showComments ? 'Visualizar' : 'Ocultar'} {comments.length} comentários</small>
      </button>

      {showComments && (
        <div className={styles.comments}>
          {comments.map(comment => (
            <div key={comment.id}>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </li>
  )
}