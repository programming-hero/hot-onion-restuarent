import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                <h2>Why You Choose Us </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aspernatur veniam quo incidunt, et dolorem.</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col mb-4">
                    <div className="card">
                       <img src="..." className="card-img-top" alt="..."/>
                        <div className="blog-card-text">
                            <h5 className="card-title"><FontAwesomeIcon className="iconsOne"  icon={faShippingFast} />Fast Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional.</p>
                            <a href="/">See More <FontAwesomeIcon className="icons" icon={faArrowAltCircleRight} /></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                       <img src="..." className="card-img-top" alt="..."/>
                        <div className="blog-card-text">
                            <h5 className="card-title"><FontAwesomeIcon className="iconsOne"  icon={faShippingFast} />Fast Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional.</p>
                            <a href="/">See More <FontAwesomeIcon className="icons" icon={faArrowAltCircleRight} /></a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                       <img src="..." className="card-img-top" alt="..."/>
                        <div className="blog-card-text">
                            <h5 className="card-title"><FontAwesomeIcon className="iconsOne"  icon={faShippingFast} />Fast Delivery</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional.</p>
                            <a href="/">See More <FontAwesomeIcon className="icons" icon={faArrowAltCircleRight} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;