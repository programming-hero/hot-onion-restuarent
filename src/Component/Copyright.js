import React from 'react';
import './Style.css';

const Copyright = () => {
    return (
        <div id="copyRight">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mt-3">
                        <p>Copyright &copy; 2020 Online Food &copy; M.H. Masud</p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="footer-nav">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Use</a>
                            <a href="/">Pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;