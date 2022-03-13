import React from 'react';
import img from '../../img/coffeeImg.png'
import CoffeeSvg from "../coffeeSvg/coffeeSvg";

const PageAbout = (props) => {
        return (
            <div className='container d-flex pageAbout'>
                <img src={img} alt=""/>
                <div className='content'>
                    <h1 className="title">About our beans</h1>
                    <CoffeeSvg id='svg' color='black'/>
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
        )
    }

;

export default PageAbout;