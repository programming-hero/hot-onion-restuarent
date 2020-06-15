import React from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const BlogChild = (props) => {

    const {name, img, icon, description} = props.bd;

    return (
           <div className="col mb-4">
               <div className="card-img">
                  <img src={img} alt="..."/>
                    <div className="blog-card-text">
                        <img src={icon} alt=""/>
                        <h5 className="card-title">{name}</h5>
                         <p className="card-text">{description}</p>
                        <a href="/">See More <FontAwesomeIcon className="icons" icon={faArrowAltCircleRight} /></a>
                     </div>
                </div>
            </div>
    );
};

export default BlogChild;