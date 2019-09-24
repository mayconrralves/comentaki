import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'
import {Link} from 'react-router-dom'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email:'',
        passwd:'',
    })
    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }
    if(auth.user !== null){
        return null
    }
    return (
        <div className ='container create-login-user'>
        <h3>Entrar na sua Conta: </h3>
        {
            auth.signInUser.signInUserState.error !== '' &&
            <p> {auth.signInUser.signInUserState.error}</p>
        }
        <input type='text' placeholder='Seu e-mail' onChange={onChange('email')} value={form.email}/>
        <input type='password' placeholder='Sua Senha' onChange={onChange('passwd')} value={form.passwd} />
        <button onClick={()=>{
           auth.signInUser.signInUser(form.email,form.passwd)
        }}>Entrar</button>
        <button><Link to='/createuser' className='create-user-login-link'>Crie sua conta aqui</Link></button>
        </div>
    )

}

export default SignInUser