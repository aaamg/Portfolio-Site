import React from 'react';
import { Route } from "react-router-dom";

// Routes imported
import ProjectBox from '../components/ProjectBox.js'
import NavigationBar from '../components/NavigationBar.js'
import Main from '../components/Main.js'
import Me from '../components/Me.js'
import SmallProjectBox from '../components/SmallProjectBox.js'
import Socials from '../components/Socials.js'

const Routes = () => {
    return(
        <>
            <Route path="/" component={NavigationBar}/>
            <Route path="/" exact component={Main} />
            <Route path="/portfolio" exact component={ProjectBox}/>
            <Route path="/projects" exact component={SmallProjectBox}/>
            <Route path="/about" component={Me} />
            <Route path="/socials" component={Socials} />
        </>
    );
}

export default Routes;