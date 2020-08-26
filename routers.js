import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './src/Components/Header';
import CompanyLogo from './src/Components/CompanyLogo';
import HomePage from './src/Components/HomePage';


export default(
    <Switch>
        <Route exact path='/' component={Header}/>,
        <Route path='/' component={CompanyLogo}/>,
        <Route path='/HomePage' component={HomePage}/>,
        <Route path='/Bin' component={Header}/>
    </Switch>
)