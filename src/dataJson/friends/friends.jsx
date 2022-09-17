import styles from '../friends/Friends.module.css';
// import friends from '../dataJson/friends.json';
import PropTypes from "prop-types";
import peoples from '../friends.json';



// for (const el of peoples) {
//   if (el.isOnline === false) {
//     isOnline = styles.statisticStatusRed
//   }
//   if (el.isOnline === true) {
//     isOnline = styles.statisticStatusGreen
//   }
 
// }







export const FriendList = ({  friends }) => {



   
    return (
 
    <ul className={styles.friendsContainer}>
   
                {friends.map(friend => (
       
          <li key={friend.id}className={styles.eachFriend}>
                <span className={friend.isOnline ? styles.statisticStatusGreen : styles.statisticStatusRed}></span>
            <span>{friend.name}</span>
            <img className={styles.friendsImg} src={friend.avatar}></img>
          </li>
        ))}
      
    </ul>
      
      
    // <ul className={styles.friendsContainer}>
   
    //             {friends.map(({avatar, name, isOnline, id}) => (
       
    //       <li key={id}className={styles.eachFriend}>
    //             <span className={isOnline ? styles.statisticStatusGreen : styles.statisticStatusRed}></span>
    //         <span>{name}</span>
    //         <img className={styles.friendsImg} src={avatar}></img>
    //       </li>
    //     ))}
      
    // </ul>
      
       
 
  
  );
};






FriendList.propTypes = {
  friends: PropTypes.array,
};
