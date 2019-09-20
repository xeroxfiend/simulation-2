import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'



export default (
    <Switch>
        {/* <Route component={Header}/> */}
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' component={Wizard}/>
    </Switch>
)