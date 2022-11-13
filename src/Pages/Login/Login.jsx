import React, { useState } from 'react'
import './Login.css';
import { SignIn } from '../SignIn/signIn';
export const Login = () => {

const [signIn, setsignIn] = useState(false);

  return (
    <div className="login">
        <div className="login__background">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
             className="login__logo" alt="" />
            <button className='login__button' onClick={()=>setsignIn(true)}>SignIn</button>

            <div className="login__gradient"></div>

        <div className="login__body">
            {
                signIn? (
                    <SignIn />
                ):(
                    <>
                    <h1>Unlimited flims ,TV programmes and more.</h1>
                    <h2>Watch anywhere , Cancel at any time.</h2>
                    <h3>
                        Ready to watch ? Enter your email to create or restart your membership. 
                    </h3>

                    <div className="login__input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button 
                             onClick={()=>setsignIn(true)} 
                             className='login__getstarted'>Get Started</button>
                        </form>
                    </div>
                    </>
                )
            }
        </div>
        </div>
    </div>
  )
}
