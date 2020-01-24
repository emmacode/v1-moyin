import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from "./container/HomeContainer";

class Routes extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={HomeContainer} exact />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Routes;