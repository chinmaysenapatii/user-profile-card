import React from "react";
// import UserProfile from "./UserProfile";

// const UserCard = () => {
//     const user = {
//         name: "Daniel Smith",
//         avatar: "https://via.placeholder.com/150",
//         biography: 'Software Developer with a passion for open-source projects'
//     };

//     return (
//         <UserProfile 
//           user={user}
//           render={(user)=>(
//             <div className="card">
//             <img src={user.avatar} alt="Avatar" />
//             <h2>{user.name}</h2>
//             <p>{user.biography}</p>
//             </div>
//            )}
//         />
//     );
// };

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.biography}</p>
    </div>
  );
};

export default UserCard;