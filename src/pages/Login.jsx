import Logo from '../assets/logo.png'
import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const [user, setUser] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate(); 

    const handleLogin = () => { 

        const storedEmail = localStorage.getItem('user');  

        const storedPassword = localStorage.getItem('password'); 

        if (user === storedEmail && password === storedPassword) { 
            navigate('/home'); 
        } else { 
            alert('Invalid credentials'); 
        }
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    return (
        <>

                <section id="login-section">
                    <div id="login">
                        <img src={Logo} id="logo-login-img" alt="logo" />
                        <h2>Log in</h2>
                        <form>
                            <div id='labels-fields'>

                                <label>Username</label>
                                <input 
                                type="text"
                                value={user} 
                                onChange={(e) => setUser(e.target.value)} 
                                />

                                <label>Password</label>
                                <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>
                            <div id='login-signup-btn'>
                                <button id='login-btn' onClick={handleLogin}>Log in</button>
                                <button id='signup-btn' onClick={handleSignup}>Sign up</button>
                            </div>
                        </form>
                    </div>
                </section>
        </>
    )
}