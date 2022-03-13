import React from 'react';
import HeaderLinks from "../headerLinks/headerLinks";
import CoffeeSvg from "../coffeeSvg/coffeeSvg";

const Header = () => {
        return (
            <div className='bgHeader'>
                <div className='header container'>
                    <CoffeeSvg id='logo' color='white'/>
                    <HeaderLinks/>
                    <h1>Everything You Love About Coffee</h1>
                    <CoffeeSvg id='svg' color='white'/>

                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button>
                        More
                    </button>
                </div>
            </div>)
    };

export default Header;