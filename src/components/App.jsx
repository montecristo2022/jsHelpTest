// import userEvent from "@testing-library/user-event";
import React from "react";
// import { ReactDOM } from "react";
// import ReactDOM from "react-dom/client";


import { Profile } from "profile/profile";
import { Statistics } from "statistics/statistics";
import { FriendList } from "dataJson/friends/friends";
import { TransactionHistory } from "dataJson/transactionHistory/transactionHistory";


import data from '../dataJson/data.json';
import friends from '../dataJson/friends.json';
import transactions from '../dataJson/transactions.json';
import user from '../dataJson/user.json';







export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
        
      }}
    >
   
  
 <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
       
      />


      <Statistics stats={data} />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />

      


    </div>



  );


};

























 // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
   
    
  //     <h1> Привет мой сладенький пупс</h1>
  
  //   </div>

  // );