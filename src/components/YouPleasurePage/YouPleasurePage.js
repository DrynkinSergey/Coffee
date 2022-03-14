import React from 'react';
import Footer from "../footer/footer";
import Header from "../header/header";
import '../../styles.scss'
import PageAbout from "../PageAbout/PageAbout";
import CoffeeItems from "../coffeeItems/coffeeItems";

const YouPleasurePage = (props) => {
    const headerData = {
        headerTitle:'For your pleasure',
        firstSubtitle:null,
        secondSubtitle:null,
        haveBtn:false,
        haveCoffeeLine:false,
        bgClass:'coffeeBg'
    }
    return(
        <div className='OurCoffee'>
            <Header data={headerData} />
            <PageAbout/>
            <hr/>
            <CoffeeItems data={props.data}/>
            <Footer/>
        </div>
    )
} ;

export default YouPleasurePage;