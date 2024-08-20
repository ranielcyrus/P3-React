import Logo from '../assets/logo.png'
import './SignUp.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        if(user.trim() !== '' && password.trim() !== '') {
            localStorage.setItem('user', user);
            localStorage.setItem('password', password);
            navigate('/');
        } else {
            alert('Empty fields!')
        }  
    };

    const handleGoBack = () => {
        navigate('/')
    }

    return (
        <>

                <section id="signup-section">
                    <div id="signup">
                        <img src={Logo} id="logo-signup-img" alt="logo" />
                        <h2>Sign Up</h2>
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
                                <button id='goback-btn' onClick={handleGoBack}>Go Back</button>
                                <button id='signup-btn' onClick={handleSignUp}>Sign up</button>
                            </div>
                        </form>
                    </div>
                </section>
        </>
    )
}