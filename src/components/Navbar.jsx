import { useState } from 'react';
import logo from '../assets/logo.png'
import searchIcon from '../assets/search.png'
import cartIcon from '../assets/cart.png'
import menuIcon from '../assets/burger-menu.png'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import Model from './Model.jsx';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

const Navbar = () => {

    const [isNavVisible, setIsNavVisible] = useState(false);
    const navigate = useNavigate(); 

    const handleMobileMenu = () => {
        setIsNavVisible(prevState => !prevState);
    };

    const handleRouting = (value) => {
        switch(value) {
            case 'Home' : 
                navigate('/home');
                break;
            case 'Men' : 
                navigate('/category/men')
                break;
            case 'Women' :
                navigate('/category/women')
                break;
            case 'Cart' :
                navigate('/cart')
                    break;
            case 'Logout' :
                navigate('/')
                break;
        }
    }

    const handleLogOutBtn = () => {
        navigate('/')
    }

    return (
        <>        
            <header>  
                    <section id='mobile'>
                        <div id='top-icons'>
                            <img src={logo} alt="logo" id='mobile-logo' />
                            <img src={menuIcon} alt="menu-icon" id='menu-icon'onClick={handleMobileMenu}/>
                        </div>
                            
                        <nav id='nav' style={{ display: isNavVisible ? 'block' : 'none' }}>
                            <ul>     
                                <li
                                    onClick={ () => handleRouting('Home')}>
                                    All Products
                                </li>
                                <li
                                    onClick={ () => handleRouting('Men')}>
                                    Men
                                </li>
                                <li
                                    onClick={ () => handleRouting('Women')}>
                                    Women
                                </li>
                                <li
                                    onClick={ () => handleRouting('Cart')}>
                                    Cart
                                </li>
                                <li
                                    onClick={ () => handleRouting('Logout')}>
                                    Log out
                                </li>
                            </ul>
                        </nav> 
                    </section>

                    <section id='web'>
                         <div className='navbar'> 
                            <div className='nav-section' id='logo-search-section'>
                                <img id="logo" src={logo} alt="logo" />
                            </div>
                            
                            <div className='nav-section' id='menu-section'>
                                <ul>
                                    <li
                                        onClick={ () => handleRouting('Home')}>
                                        All Product
                                    </li>
                                    <li
                                        onClick={ () => handleRouting('Men')}>
                                        Men
                                    </li>
                                    <li
                                        onClick={ () => handleRouting('Women')}>
                                        Women
                                    </li>
                                </ul>
                                <div className='cart-logout-section'>
                                    <img src={cartIcon} id='cart-icon' alt="logout-icon" onClick={ () => handleRouting('Cart')}/>
                                    <button id="logout-btn" onClick={handleLogOutBtn}>Log out</button>
                                </div>
                            </div>
                        </div> 
                    </section>     
            </header>
        </>
    )
}

export default Navbar;