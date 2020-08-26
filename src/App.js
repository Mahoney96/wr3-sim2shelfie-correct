import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import CompanyLogo from "./Components/CompanyLogo";
import BinList from './Components/BinList';
import HomePage from './Components/HomePage';

class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <CompanyLogo />
            <BinList />
            <HomePage/>
        </div>
}};

export default App;
