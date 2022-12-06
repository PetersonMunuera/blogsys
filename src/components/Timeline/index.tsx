import { Post } from "../Post"
import styles from './styles.module.scss'

export function Timeline() {
  return (
    <ul className={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ul>
  )
}