import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import CartItem from '../Component/CartItem';

const LunchItem = (props) => {
    const {name, title, price, img, id} = props.pd; 
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={img} className="card-img-top" alt="Lunch food item"/>
                <div className="card-body"> 
                <h5 className="car d-title">

                    {/* <Link to="/cartItem"> {name}</Link> */}
                    {/* <Link to={`/cartItem/${id}`}> {name}</Link> */}

                    <Link to={`cartItem/${id}`}> {name} </Link>

                    


                    </h5>
                <p className="card-text">{title}</p>
                <h5>$ {price}</h5>
                </div>
            </div>
        </div>
    );
};

export default LunchItem;