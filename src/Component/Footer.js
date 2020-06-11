import React from 'react';
import './Style.css'; 
import Logo from '../logo.png';

const Footer = () => {
    return (
        <div id="footerArea">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo mt-5">
                            <img src={Logo} alt="Footer-Logo"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-nav mt-5">
                            <a href="/">About Online Food</a>
                            <a href="/">Read Our Blog</a>
                            <a href="/">Sign Up to Deliver</a>
                            <a href="/">Add Your Resturant</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-nav mt-5">
                            <a href="/">About Online Food</a>
                            <a href="/">Read Our Blog</a>
                            <a href="/">Sign Up to Deliver</a>
                            <a href="/">Add Your Resturant</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;