import React from "react";

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