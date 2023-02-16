import styles from './styles.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
        </div>
        <h2>Hello Bruno!</h2>
      </div>
      <div className={styles.cardsContainer}> 
        <div className={styles.card}>
          <p>starbucks points</p>
          <h2>100</h2>
        </div>
        <div className={styles.card}>
          <h2>Rewards</h2>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>preço</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frappuccino</td>
            <td>R$20</td>
            <td>5 points</td>
          </tr>
          <tr>
            <td>Iced coffee</td>
            <td>R$15</td>
            <td>3 points</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}