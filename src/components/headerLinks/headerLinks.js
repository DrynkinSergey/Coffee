import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderLinks = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/Coffee/'>Coffee house</NavLink></li>
                <li><NavLink to='/Coffee/ourCoffee'>Our coffee</NavLink></li>
                <li><NavLink to='/Coffee/youPleasure'>For your pleasure</NavLink></li>
            </ul>
        </nav>

    )
}

export default HeaderLinks;