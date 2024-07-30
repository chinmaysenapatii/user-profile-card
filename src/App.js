// import './App.css';
// import UserCard from './components/UserCard';

// function App() {
//   return (
//     <div className="App">
//       <UserCard />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import UserProfile from './components/UserProfile';
import UserCard from './components/UserCard';
import { users } from './data';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} render={(user) => <UserCard user={user} />} />
      ))}
    </div>
  );
};

export default App;

