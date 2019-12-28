import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from "./container/HomeContainer";
import AboutContainer from "./container/AboutContainer";
import ContactContainer from "./container/ContactContainer";
import WorkContainer from "./container/WorkContainer";

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={HomeContainer} exact />
                        <Route path="/about" component={AboutContainer} exact />
                        <Route path="/work" component={WorkContainer} exact />
                        <Route path="/contact" component={ContactContainer} exact />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Routes;