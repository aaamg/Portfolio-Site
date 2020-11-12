import React from 'react';
import { Route } from "react-router-dom";

// Routes imported
import Card from '../components/Card.js'
import NavigationBar from '../components/NavigationBar.js'
import Main from '../components/Main.js'
import Me from '../components/Me.js'

const Routes = () => {
    return(
        <>
            <Route path="/" component={NavigationBar}/>
            <Route path="/" exact component={Main} />
            <Route path="/card" component={Card}/>
            <Route path="/me" component={Me} />
        </>
    );
}

export default Routes;