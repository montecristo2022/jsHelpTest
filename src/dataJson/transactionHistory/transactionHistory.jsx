import styles from '../transactionHistory/TransactionHistory.module.css'
import PropTypes from "prop-types";


export const TransactionHistory = ({ items }) => { 


  
    
 return <ul className={styles.transactionContainer}>
      <thead>
      <tr>
        <th className={styles.transactionType1}>Type</th>
        <th className={styles.transactionType}>Amount</th>
        <th className={styles.transactionType}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <tr key={id}>
          <td className={styles.transactionTypeData}>{type}</td>
          <td className={styles.transactionTypeData}>{amount}</td>
          <td className={styles.transactionTypeData}>{currency}</td>
        </tr>
      ))}
    </tbody>
</ul>

  
       
}



TransactionHistory.propTypes = {

  items: PropTypes.array,
};