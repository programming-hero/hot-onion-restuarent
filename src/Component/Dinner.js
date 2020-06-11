import React from 'react';
import './Style.css'

const Dinner = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card cad">
                    <img src=".." className="card-img-top" alt="Dinner food item"/>
                    <div className="card-body">
                        <h5 className="card-title">Fried Chicken Bento</h5>
                        <p className="card-text">How we dream about your future</p>
                        <h5>$ 15.20</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="Dineer food item"/>
                    <div className="card-body">
                        <h5 className="card-title">Fried Chicken Bento</h5>
                        <p className="card-text">How we dream about your future</p>
                        <h5>$ 15.20</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="..." className="card-img-top" alt="Dinner food item"/>
                    <div className="card-body">
                        <h5 className="card-title">Fried Chicken Bento</h5>
                        <p>How we dream about your future</p>
                        <h5>$ 15.20</h5>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-5">
                <button className="btn btn-secondary">Checkout Your Food</button>
            </div>
    </div>
    );
};

export default Dinner;