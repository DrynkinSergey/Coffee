import React from 'react';
import Footer from "../footer/footer";
import Header from "../header/header";
import '../../styles.scss'
import PageAbout from "../PageAbout/PageAbout";
import CoffeeItems from "../coffeeItems/coffeeItems";
import Filter from "../filter/filter";
const CoffeePage = (props) => {
    const {onFilter,onSearch} = props;
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
            <PageAbout aboutTitle='About our beans' img={props.img[1]}/>
            <hr/>
            <Filter onSearch={onSearch} onFilter={onFilter}/>
            <CoffeeItems data={props.data}/>
            <Footer/>
        </div>
    )
    } ;

export default CoffeePage;