import React from 'react';
import './Style.css'

const Banner = () => {
    return (
        <div id="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="banner-text">
                            <h2>Best Food Waiting for your belly</h2>
                            <div className="banner-search just">
                                <input type="text" placeholder="Search Food items"/>
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;