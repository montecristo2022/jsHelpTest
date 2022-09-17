import styles from '../transactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => { 
    return (items.map(item => (
       <table className={styles.transactionContainer}>
  <thead>
    <tr>
                    <th>Type {item.type}</th>
                    <th>Amount {item.amount}</th>
                    <th>Currency {item.currency}</th>
    </tr>
  </thead>
</table>
    ))
    )
}