import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import login from '../assets/login.png';
import home from '../assets/home.png';
import register from '../assets/add.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='link'>
                <div className='link-container'>
                    <NavLink to='/' exact className='nav-item'>
                        <img className='imgNav' src={home} />
                    </NavLink>
                    <NavLink to='/registro' className='nav-item'>
                        <img className='imgNav' src={register} />
                    </NavLink>
                    <NavLink to='/login' className='nav-item'>
                        <img className='imgNav' src={login} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
//navlink es para colocar la clase active
