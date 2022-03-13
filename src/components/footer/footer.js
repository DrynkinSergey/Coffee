import React from 'react';
import HeaderLinks from "../headerLinks/headerLinks";
import CoffeeSvg from "../coffeeSvg/coffeeSvg";

const Footer = () => {
    return(
        <footer className='container'>
            <HeaderLinks/>
            <CoffeeSvg id='svg' color='black'/>
        </footer>
    )
    }

;

export default Footer;