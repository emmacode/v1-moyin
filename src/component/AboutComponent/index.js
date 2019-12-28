import React, { Component } from 'react';

import Layout from "../../sharedComponent/Layout";
import About from "./About";

class AboutComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <About />
                </Layout>
            </>
        )
    }
}

export default AboutComponent;