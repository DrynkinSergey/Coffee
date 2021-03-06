import React from 'react';
import HeaderLinks from "../headerLinks/headerLinks";
import CoffeeSvg from "../coffeeSvg/coffeeSvg";
import {NavLink} from "react-router-dom";

const Header = ({data}) => {
    return (
        <header className={data.bgClass}>
            <div className='header container'>

                <CoffeeSvg id='logo' color='white'/>
                <HeaderLinks/>
                <h1 >{data.headerTitle}</h1>
                {data.haveCoffeeLine ? <CoffeeSvg id='svg' color='white'/> : null}

                {data.firstSubtitle ? <h2>{data.firstSubtitle}</h2> : null
                }
                {data.secondSubtitle ? <h2>Want to try our beans?</h2> : null
                }
                {data.haveBtn ? <NavLink className='btn' to='/Coffee/ourCoffee'>
                    More
                </NavLink> : null}
            </div>
        </header>)
};

export default Header;