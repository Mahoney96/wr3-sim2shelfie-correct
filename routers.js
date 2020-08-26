import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './src/Components/Header';
import CompanyLogo from './src/Components/CompanyLogo';


export default(
    <Switch>
        <Route exact path='/' component={Header}/>,
        <Route path='/' component={CompanyLogo}/>,
        <Route path='/HomePage' component={}/>,
        <Route path='/Bin' component={Header}/>
    </Switch>
)