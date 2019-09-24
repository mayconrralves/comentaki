import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'
import {Link} from 'react-router-dom'

const CreateUser = () => {
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
        <h3 className='teste'>Criar Nova Conta: </h3>
        {
            auth.createUser.createUserState.error !== '' &&
            <p>{auth.createUser.createUserState.error}</p>
        }
        <input type='text' placeholder='Seu e-mail' onChange={onChange('email')} value={form.email}/>
        <input type='password' placeholder='Sua Senha' onChange={onChange('passwd')} value={form.passwd} />
        <button onClick={()=>{
            auth.createUser.createUser(form.email,form.passwd)
        }}>Criar Conta</button>
        <button><Link className='create-user-login-link' to='/login'>Login</Link></button>

        </div>
    )

}

export default CreateUser