import styles from '../friends/Friends.module.css';
// import friends from '../dataJson/friends.json';

export const FriendList = ({ friends }) => {



   
    return (
 
    <ul className={styles.friendsContainer}>
      <li>
                {friends.map(friend => (
         
          <li>
                <span className={styles.statisticStatusGreen}></span>
            <span>{friend.name}</span>
            <img className={styles.friendsImg} src={friend.avatar}></img>
          </li>
        ))}
      </li>
    </ul>
  );
};
