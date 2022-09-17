
import styles from '../profile/Profile.module.css'


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.img} src={avatar}/>
        <p className={ styles.profileNameSpan}> {username}</p>
        <p className={styles.profileSpan} >@{tag}</p>
        <p className={styles.profileSpan}>{location}</p>
      </div>

      <ul>
        <li>
          <span className={styles.profileSpan}>Followers: </span>
          <span className={styles.profileSpan}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.profileSpan}>Views: </span>
          <span className={styles.profileSpan}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.profileSpan}>Likes: </span>
          <span className={styles.profileSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};