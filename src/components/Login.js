import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const signIn =((e)=>{
    e.preventDefault();

    // firebase login
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      navigate('/');
    })
    .catch((error)=>{
      const errorMessage = error.message;
      alert(errorMessage)
    })
  })

  const register=((e)=>{
    e.preventDefault();
    // firebase register
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        const user = userCredential.user;
        // console.log(user);
        if(user){
          navigate('/')
        }
      })
      .catch((error)=>{
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
    
  })
  return (
    <div className='login'>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          className='login__Logo' alt="" />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={(e)=>{
                  setEmail(e.target.value);                  
                }}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={(e)=>{
                  setPassword(e.target.value);
                }}/>
                <button className='login__signInBtn' type='submit' onClick={signIn}>Sign In</button>
            </form>
              <p>
                  By continuing, you agree to Amazon's <span style={{ color: 'blue', cursor: 'pointer' }}>Conditions of Use</span> and <span style={{ color: 'blue', cursor: 'pointer' }}>Privacy Notice</span>.
              </p>

              <button className='login__regBtn' onClick={register}>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login