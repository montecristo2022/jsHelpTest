import styles from '../friends/Friends.module.css';
// import friends from '../dataJson/friends.json';
import PropTypes from "prop-types";


export const FriendList = ({ friends }) => {



   
    return (
 
    <ul className={styles.friendsContainer}>
   
                {friends.map(friend => (
         
          <li key={friend.id}className={styles.eachFriend}>
                <span className={styles.statisticStatusGreen}></span>
            <span>{friend.name}</span>
            <img className={styles.friendsImg} src={friend.avatar}></img>
          </li>
        ))}
      
    </ul>
  );
};



FriendList.propTypes = {
  friends: PropTypes.array,
};
