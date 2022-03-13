import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderLinks = () => {
    return (
            <ul>
                <li><NavLink to='/'>Coffee house</NavLink></li>
                <li><NavLink to='coffee'>Our coffee</NavLink></li>
                <li>For your pleasure</li>
            </ul>
    )
}

export default HeaderLinks;