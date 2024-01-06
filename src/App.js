import { useState } from 'react';
import NewUser from './components/User/NewUser';
import UserList from './components/User/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userData) => {
    setUsers((prevUser) => {
      return [...prevUser, userData];
    });

  };

  return (
    <div>
      <NewUser onAddUser = {addUserHandler} />
      <UserList users = {users} />
    </div>
  );
}

export default App;
