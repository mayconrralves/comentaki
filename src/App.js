import React,{useState, useEffect} from 'react'
import './App.css';
import firebase from './firebase'
import Comments from './Comments'
import NewComment from './NewComment'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

const App = () => {
  const [hideState, setHideState] = useState(false)
  const hide = () => {
    setHideState(!hideState)
  }
  return (
    <AuthProvider>
        <div className='flex'>
        
        {hideState && <div className ='container create-login-user'><SignInUser /></div>}
        {!hideState && <div className ='container create-login-user'><CreateUser /></div>}
        {!hideState && <div className ='container create-login-user'><button onClick={hide}>Login</button></div>}
        {hideState && <div className ='container create-login-user'><button onClick={hide}>Create User</button></div>}
          <NewComment />
          <div className ='container comments'><Comments /> </div>
          
          <UserInfo />
        </div>
    </AuthProvider>
    
  )
}

export default App;
