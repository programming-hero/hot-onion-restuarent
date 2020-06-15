import React from 'react';
import './Style.css'
import Data from '../Data/Data'; 
import { useState } from 'react';
import DinnerItem from './DinnerItem';

const Dinner = () => {
    const dinner = Data.slice(6,12); 
    const [item, setItem] = useState(dinner); 
    console.log(item);
    return (
        <div className="container">
        <div className="row">
            
                {
                    item.map(pd => <DinnerItem pd={pd}></DinnerItem>)
                }
            </div>
        </div>
    );
};

export default Dinner;