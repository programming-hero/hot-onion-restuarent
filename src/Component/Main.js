import React from 'react';
import './Style.css'
const Main = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <nav>
                        <ul className="nav">
                            <li className="nav-item"><a href="/breakfast" activeClassName="active">Breakfast</a></li>
                            <li className="nav-item"><a href="/lunch" activeClassName="active">Lunch</a></li>
                            <li className="nav-item"><a href="/dinner" activeClassName="active">Dinner</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Main;
