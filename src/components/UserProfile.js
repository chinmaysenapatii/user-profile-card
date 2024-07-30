import React from 'react';

const UserProfile = ({ render, user }) => {
    return (
        <div>
            {render(user)}
        </div>
    );
};

export default UserProfile;