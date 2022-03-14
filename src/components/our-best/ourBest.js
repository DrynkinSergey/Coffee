import React from 'react';
import img from './img/1.png'

const Card = () => {
    return (
        <>
            <img src={img} alt=""/>
            <div className="name">Solimo Coffee Beans 2 kg</div>
            <div className="price">10.73$</div>
        </>
    )
}

const OurBest = (props) => {
    return (
        <section className='ourBest'>
            <div className='container'>
                <h2>Our best</h2>
                <div className='d-flex p-160 cards'>
                    <div className='ourBest__card'><Card/></div>
                    <div className='ourBest__card'><Card/></div>
                    <div className='ourBest__card'><Card/></div>
                   

                </div>
            </div>

        </section>
    )
    }

;

export default OurBest;