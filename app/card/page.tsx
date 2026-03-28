
import styles from "./Card.module.css" ;

export default function Card(){
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Card Page</h1>
      <p>this is card page</p>
    </div>
  )
}