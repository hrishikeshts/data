import React from "react";
import NavigationM from "./navigation";
import NavigationS from "./navigations";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./home";
import AboutUs from './aboutus';
import Businessplan from './businessplan';

function Main() {
    
    return (
       <Router>
           <Switch>
                <Route exact path='/' component={NavigationM} />
                <Route path='/aboutus' component={NavigationS} />
                <Route path='/other' component={NavigationS} />
           </Switch>
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route path='/aboutus' component={AboutUs}/>
                <Route path="/other" component={Businessplan}/> 
                <Route path='*' component={Home} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default Main;
