import React from 'react';
import bg from "../../img/Main bg.jpg";
import HeaderLinks from "../headerLinks/headerLinks";
import Line from "../line/line";

const Header = (props) => {
        return (
            <div className='bgHeader'>
                <div className='header container'>
                    <HeaderLinks/>
                    <h1>Everything You Love About Coffee</h1>
                    <Line/>
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button>
                        More
                    </button>
                </div>
            </div>)
    }

;

export default Header;