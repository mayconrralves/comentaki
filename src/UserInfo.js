import React, {useState, useContext} from 'react'
import {AuthContext} from './auth'
const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName,setnewDisplayName] = useState(displayName)
    const onChange = evt => {
        setnewDisplayName(evt.target.value)
    }
    const save = () => {
        if(newDisplayName !== ''){
            user.updateProfile({displayName: newDisplayName})
        }
    }
    return(
        <>
            <input type='text' value={newDisplayName} onChange={onChange}/>
            <button onClick={save} >Change</button>
        </>
    )
    
}
const UserInfo = ({ setHideLoginState}) => {
    const auth = useContext(AuthContext)
    
    if(auth.user === null) {
        return null   
   }
    const {displayName} = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@') 
    const dn = displayName || alternativeDisplayName

    const signout = () =>{
        auth.signout()
    }
    
    return (
        <div className='flex userInfo'>
        
         <p>Olá <FormDisplayName displayName={dn} user={auth.user} /></p>
            
            <button className='button-sair' onClick={signout}>Sair!</button>
        </div>
       
    )

}

export default UserInfo