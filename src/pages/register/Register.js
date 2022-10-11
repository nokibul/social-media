import React from 'react'
import './register.css';


const Register = () => {
  return (
    <div className='login'> 
        <div className="loginWrapper">
            <div className="loginLeft">
                <h2 className="loginLogo">NokiSocial</h2>
                <span className="loginDesc">Connect with friends all over the globe in an instant</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='Password Again' className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className='loginRegisterButton'>
                        Create an account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;