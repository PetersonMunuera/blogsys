import styles from './styles.module.scss'

export function Post() {
  return (
    <li className={styles.card}>
      <h1>Titulo do post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, saepe! Sit eaque assumenda commodi perferendis earum, odit labore sed? Et deserunt culpa non, labore facilis harum soluta repellendus ad nulla.</p>
      <small>5 comentários</small>
    </li>
  )
}