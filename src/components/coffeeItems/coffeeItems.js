import React from 'react';
import CoffeeSingleItem from "../coffeeSingleItem/coffeeSingleItem";

const CoffeeItems = (props) => {
    const {data} = props;
    const coffeeItems = data.map(({title,country,id,price}) => {
       return <CoffeeSingleItem key={id} title={title} country = {country} price={price} id={id}/>
    })
    return (
        <div className='Items'>
            <div className='d-flex items filter'>
                {coffeeItems}
            </div>
        </div>
    );
}


export default CoffeeItems;