import React from 'react'
import './App.css';
import Comments from './Comments'
import NewComment from './NewComment'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'
import Header from './Header'
import {BrowserRouter, Route} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        
        <div className='flex'>
          <div className='userInfo'><UserInfo /></div>
          <Route exact path='/' component={SignInUser} />
          <Route exact path='/login' component={SignInUser} />
          <Route exact path='/createuser' component={CreateUser} />
          <div className='newComment'><NewComment /></div>
          <Comments />
          
        </div>
      </AuthProvider>
    </BrowserRouter>
    
    
  )
}

export default App;
