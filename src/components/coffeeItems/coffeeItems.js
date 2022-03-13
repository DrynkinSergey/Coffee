import React from 'react';
import CoffeeSingleItem from "../coffeeSingleItem/coffeeSingleItem";

const CoffeeItems = (props) => (
    <div className='Items'>
    <div className='d-flex filter'>
       <div><span>Lookiing for</span><input placeholder='start typing here...' type="text"/></div>
        <div className="btnGroup">
            <span>Or filter</span>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
        </div>
    </div>
        <div className='d-flex items filter'>
            <CoffeeSingleItem/>
            <CoffeeSingleItem/>
            <CoffeeSingleItem/>
            <CoffeeSingleItem/>
            <CoffeeSingleItem/>
            <CoffeeSingleItem/>
        </div>
    </div>
);

export default CoffeeItems;