import React from 'react';
import logo from '../../img/coffee-beans.png'
const HeaderLinks = (props) => {
    return (
            <ul>
                <li><img src={logo} alt=""/>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
    )
}

export default HeaderLinks;