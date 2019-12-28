import React, { Component } from 'react'

import Home from "./Home"
import Layout from '../../sharedComponent/Layout'

class HomeComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <Home />
                </Layout>
            </>
        )
    }
}

export default HomeComponent;