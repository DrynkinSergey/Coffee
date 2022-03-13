import React from 'react';
import itemImg from '../../img/itemImg.png'
const CoffeeSingleItem = (props) => (
    <div className='item'>
        <img src={itemImg} alt=""/>
        <span className='title'>AROMISTICO Coffee 1 kg</span>
        <span className='country'>Columbia</span>
        <span className='price'>6.99$</span>
    </div>
);

export default CoffeeSingleItem;