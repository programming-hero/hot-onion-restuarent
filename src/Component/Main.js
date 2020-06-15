import React from 'react';
import './Style.css'
import { NavLink } from 'react-router-dom';
const Main = () => {

    return (
        <div className="container mt-5 mb-3">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <ul className="nav">
                        <li><NavLink to="/breakfast" exact activeClassName="active">Breakfast</NavLink></li>
                        <li><NavLink to="/lunch" exact activeClassName="active">Lunch</NavLink></li>
                        <li><NavLink to="/dinner" exact activeClassName="active">Dinner</NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
