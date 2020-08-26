import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import CompanyLogo from "./Components/CompanyLogo";

class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <CompanyLogo />
        </div>
    }
}

export default App;
