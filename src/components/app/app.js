import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from "../mainPage/MainPage";
import CoffeePage from "../CoffeePage/coffeePage";
import YouPleasurePage from "../YouPleasurePage/YouPleasurePage";
import AboutCoffeeItem from "../AboutCoffeeItem/aboutCoffeeItem";
import  YouPleasureImg from "../../img/yourPleasureImg.png"
import  CoffeeImg from '../../img/coffeeImg.png'

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            coffeeData : [
                {title: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 3, id: 1},
                {title: 'COFFEE Coffee 1 kg', country: 'Kenya', price: 33, id: 2},
                {title: 'LAVAZZA Coffee 1 kg', country: 'Columbia', price: 32, id: 3},
                {title: 'CHIBO Coffee 1 kg', country: 'Brazil', price: 32, id: 4},
                {title: 'ESPRESSO Coffee 1 kg', country: 'Columbia', price: 31, id: 5},
                {title: 'JACOBS Coffee 1 kg', country: 'Brazil', price: 35, id: 6},
            ],
            aboutIImg:[
                {src:YouPleasureImg},
                {src:CoffeeImg},
            ],
            filterValue:'',
            searchValue:''
        }
    }
    searchCoffeeItem = (items, searchValue) => {
        if (searchValue.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        })
    }
    filterCoffee = (items, filterValue) => {
        switch (filterValue) {
            case 'Columbia':
            {
                return items.filter(item => item.country ===filterValue)
            }
            case 'Kenya':
            {
                return items.filter(item => item.country ===filterValue)
            }
            case 'Brazil':
            {
                return items.filter(item => item.country ===filterValue)
            }
            default: return items
        }
    }
     onFilter = (element) => {
        this.setState({
            filterValue:element
        })
    }
    onChangeSearch = (element) => {
        this.setState({
            searchValue:element
        })
    }

    render() {
        const {coffeeData, filterValue, searchValue, aboutIImg} = this.state;
        const visibleData = this.searchCoffeeItem(this.filterCoffee(coffeeData,filterValue),searchValue);



        return (
            <Router>
                <Routes>
                    <Route exact path="Coffee/ourCoffee" element={<CoffeePage img={aboutIImg} data={visibleData} onSearch={this.onChangeSearch} onFilter={this.onFilter}/>}/>
                    <Route exact path="Coffee/youPleasure" element={<YouPleasurePage img={aboutIImg} data={visibleData}/>}/>
                    <Route exact path="Coffee/coffeeItem/:id/:title" element={<AboutCoffeeItem data={visibleData}/>}/>
                    <Route exact path="Coffee/" element={<MainPage/>}/>
                </Routes>

            </Router>
        );
    }


}
export default App;