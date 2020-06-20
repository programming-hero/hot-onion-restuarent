import React, {useContext} from 'react';
import './Style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import {CartContext} from './CartContext'; 
import food from  '../Data/Data';
import { useState } from 'react';

const CartItem = (props) => {

    const {id} = useParams()
    const theFood = food.find(f=> f.id == id) ;
    const {img, name, price, description} = theFood; 
    const [count, setCount] = useState(0); 
    const {dispatch} = useContext(CartContext);
  

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="itemContent">
                    <h3>{name}</h3>
                        <p>{description}</p>
                       <div className="cartAdd">
                       <h5>$ {price}
                       <span className="cartAdd"><FontAwesomeIcon onClick={()=> setCount(count - 1)}  icon={faMinus} />  
                       <input type="text" id='addQty' value={count}/>  
                       <FontAwesomeIcon onClick={()=> setCount(count+1)} icon={faPlus} />
                       </span>
                       </h5>
                       </div>
                        <div className="addSubmit mt-4">
                            <button onClick={() => dispatch({type: 'ADD_TO_CART', id: theFood.id, theFood})} ><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                        </div>
                    </div>
                    <div className="featuredImg mt-4">
                        <div className="col-6">
                            <img src={img} alt="fetured image"/>
                        </div>
                        <div className="col-6">
                            <img src={img} alt="fetured image"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 cat-img">
                    <img src={img} alt="Featured Image big size"/>
                </div>
            </div>
        </div>
    );
};

export default CartItem;