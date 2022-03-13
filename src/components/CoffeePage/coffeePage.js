import React from 'react';
import Footer from "../footer/footer";
import Header from "../header/header";
import '../../styles.scss'
import PageAbout from "../PageAbout/PageAbout";
import CoffeeItems from "../coffeeItems/coffeeItems";
import CoffeeSingleItem from "../coffeeSingleItem/coffeeSingleItem";
const CoffeePage = (props) => {
    const headerData = {
        headerTitle:'Our Coffee',
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
            <CoffeeItems/>
            <Footer/>
        </div>
    )
    } ;

export default CoffeePage;