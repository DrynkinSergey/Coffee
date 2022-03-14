import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from "../mainPage/MainPage";
import CoffeePage from "../CoffeePage/coffeePage";
import YouPleasurePage from "../YouPleasurePage/YouPleasurePage";
import AboutCoffeeItem from "../AboutCoffeeItem/aboutCoffeeItem";
import HeaderLinks from "../headerLinks/headerLinks";

const App = () => {
    const coffeeData = [
        {title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 3, id: 1},
        {title: 'COFFEE Coffee 1 kg', country: 'Kenya', price: 33, id: 2},
        {title: 'LAVAZZA Coffee 1 kg', country: 'Columbia', price: 32, id: 3},
        {title: 'CHIBO Coffee 1 kg', country: 'Brazil', price: 32, id: 4},
        {title: 'ESPRESSO Coffee 1 kg', country: 'Columbia', price: 31, id: 5},
        {title: 'JACOBS Coffee 1 kg', country: 'Brazil', price: 35, id: 6},
    ]
    return (
        <Router>
            <Routes>
                <Route exact path="/coffee" element={<CoffeePage data={coffeeData}/>}>

                </Route>


                    <Route exact path="/youPleasure" element={<YouPleasurePage data={coffeeData}/>}/>

                <Route path="/coffeeItem/:id/:title"  element={<AboutCoffeeItem data={coffeeData}/>}/>



                <Route exact path="/" element={<MainPage/>}/>
            </Routes>

        </Router>
    );
}
export default App;