import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import img from "../../img/coffeeImg.png";
import CoffeeSvg from "../coffeeSvg/coffeeSvg";
import {NavLink, useParams} from "react-router-dom";

const AboutCoffeeItem = (props) => {
    const params = useParams();

    const item = props.data[params.id-1];

    const headerData = {
        headerTitle:'Our Coffee',
        firstSubtitle:null,
        secondSubtitle:null,
        haveBtn:false,
        haveCoffeeLine:false,
        bgClass:'coffeeBg'
    }
    return (
        <div className='OurCoffee'>
            <Header data={headerData} />
            <div className='container d-flex pageAbout'>
                <img src={img} alt=""/>
                <div className='content'>
                    <h1 className="title">{item.title}</h1>
                    <CoffeeSvg id='svg' color='black'/>
                    <div className='countryItem'>Country: {item.country}</div>
                    <div className='descriptionItem'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className='priceItem'>Price: {item.price}.99$</div>
                    <NavLink className='btn back' to='/Coffee/ourCoffee'>Back</NavLink>

                </div>

            </div>

            <Footer/>
        </div>
    );
}

export default AboutCoffeeItem;