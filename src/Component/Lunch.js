import React from 'react';
import './Style.css'
import Data from '../Data/Data'; 
import { useState } from 'react';
import LunchItem from './LunchItem';

const Lunch = () => {
    const lunch = Data.slice(0,6); 
    const [item, setItem] = useState(lunch); 
    return (
        <div className="container">
        <div className="row">
            
                {
                    item.map(pd => <LunchItem pd={pd}></LunchItem>)
                }
            </div>
        </div>
    );
};

export default Lunch;