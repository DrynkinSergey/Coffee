import React from 'react';
import itemImg from '../../img/itemImg.png'
import {Link} from "react-router-dom";
const CoffeeSingleItem = (props) => {
    const {title,country, price, id} = props;
    return (
        <Link  to={{
            pathname: `/Coffee/ourCoffee/${id}/${title}`,
        }}  className='item'>
            <img src={itemImg} alt=""/>
            <span className='title'>{title}</span>
            <span className='country'>{country}</span>
            <span className='price'>{price}.99$</span>
        </Link>
    );
}

export default CoffeeSingleItem;