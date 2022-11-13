import React, { useState } from 'react'
import './signIn.css';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase';
export const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');

  const register=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{

      console.log(authUser);
    }).catch((err)=>{
      alert(err.message)
    })
  }

  const signin=(e)=>{
    console.log('s');
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
      console.log(authUser);
    }).catch((err)=>{
      alert(err.message)
    })
  }
  
  return (
  <div className="signin">
    <form>
      <h1>SignIn</h1>
      <input type="email" placeholder='Email'
       onChange={e=>setemail(e.target.value)}
       value={email}
       />
      <input type="password" value={password} 
      placeholder='Password' onChange={e=>setpassword(e.target.value)}/>
      <button type='submit' onClick={signin}>SignIn</button>

      <h5>
        <span className='signin__graybtn'>
          New To Netflix
        </span>
        <span className='signin__link' onClick={register}>Sign up Now</span>
      </h5>
    </form>
  </div>
  )
  }

