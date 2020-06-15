import React from 'react';
import './Style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';

const CartItem = (props) => {

   const {id}= useParams(); 


    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="itemContent">
                        <h3>Light Breakfast</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet eius porro veniam repudiandae totam quibusdam voluptatibus maiores quo in aperiam.</p>
                       <div className="cartAdd">
                       <h5>$ 55.00 <span className="cartAdd"><FontAwesomeIcon icon={faMinus} />  <input type="text" value="1"/>  <FontAwesomeIcon icon={faPlus} /></span></h5>
                       </div>
                        <div className="addSubmit mt-4">
                            <button><FontAwesomeIcon icon={faShoppingCart} />  Add</button>
                        </div>
                    </div>
                    <div className="featuredImg mt-4">
                        <div className="col-6">
                            <img src="" alt="fetured image"/>
                        </div>
                        <div className="col-6">
                        <img src="" alt="fetured image"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="" alt="Featured Image big size"/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;