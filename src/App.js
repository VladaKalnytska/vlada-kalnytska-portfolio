import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'

import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles/_global.scss'

const App = () => {
    return (
        <Router>
            
            <div className = "App">
                <Header/>
                <Routes>
                <Route exact path = { process.env.PUBLIC_URL + '/' } element = { <HomePage /> }/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;