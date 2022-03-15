import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderLinks = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/coffee'>Coffee house</NavLink></li>
                <li><NavLink to='/ourCoffee'>Our coffee</NavLink></li>
                <li><NavLink to='/youPleasure'>For your pleasure</NavLink></li>
            </ul>
        </nav>

    )
}

export default HeaderLinks;