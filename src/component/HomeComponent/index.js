import React, { Component } from 'react'

import Home from "./Home"
import Layout from '../../sharedComponent/Layout'
import Description from './Description'
import Project from "./Project"
import About from "./About"
import Contact from "./Contact"

class HomeComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <Home />
                    <Description />
                    <Project />
                    <About />
                    <Contact />
                </Layout>
            </>
        )
    }
}

export default HomeComponent;