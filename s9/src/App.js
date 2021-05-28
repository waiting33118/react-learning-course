import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserListener = (newUser) => {
    setUsersList((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserListener} />
      <UsersList users={usersList} />
    </React.Fragment>
  )
}

export default App
