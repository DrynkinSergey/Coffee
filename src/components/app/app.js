import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "../mainPage/MainPage";
import CoffeePage from "../CoffeePage/coffeePage";

const App = () => (
    <Router>
        <Routes>
            <Route exact path="/coffee" element={<CoffeePage/>}/>
            <Route exact path="/" element={<MainPage/>}/>
        </Routes>

    </Router>
);
export default App;