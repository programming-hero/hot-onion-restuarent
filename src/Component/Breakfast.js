import React from 'react';
import './Style.css'
import Data from '../Data/Data'; 
import { useState } from 'react';
import BreakfastItem from './BreakfastItem';

const Breakfast = () => {
    const breakfast = Data.slice(12,18); 
    const [item, setItem] = useState(breakfast); 
    return (
        <div className="container">
        <div className="row">
            
                {
                    item.map(pd => <BreakfastItem pd={pd}></BreakfastItem>)
                }
            </div>
        </div>
    );
};

export default Breakfast;