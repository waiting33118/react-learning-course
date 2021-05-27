import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserListener = (newUser) => {
    setUsersList((prevUsers) => [...prevUsers, newUser])
  }

  return (
    <div>
      <AddUser onAddUser={addUserListener} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
