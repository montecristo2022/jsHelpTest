import styles from "../statistics/Statistics.module.css"
import PropTypes from "prop-types";


export const Statistics = ({ stats }) => {
    return (
    
      
        <ul className={styles.ulContainer}>
            <h2 className={styles.statisticMainText}>UPLOAD STATS</h2>
            {stats.map(item => (
           
              <li key={item.id}> 
             
          <span className={styles.statisticText}>{item.label}</span>
          <span className={styles.statisticText}> {item.percentage}%</span>
        </li>
      ))}
    </ul>
    )
}

Statistics.propTypes = {
  stats: PropTypes.array,
};