import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './src/Components/Header';
import CompanyLogo from './src/Components/CompanyLogo';
import HomePage from './src/Components/HomePage';
import BinList from './src/Components/BinList';


export default(
    <Switch>
        <Route exact path='/' component={HomePage}/>,
        <Route path='/' component={CompanyLogo}/>,
        <Route path='/HomePage' component={BinList}/>,
        <Route path='/Bin' component={Header}/>
    </Switch>
)