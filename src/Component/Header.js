import React from 'react';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Logo from '../logo2.png'; 

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg sticky">
                <a href="/" className="navbar-brand logo">
                    <img src={Logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/cart"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                        <li className="nav-item ml-4">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item ml-4">
                            <button className="btn">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;