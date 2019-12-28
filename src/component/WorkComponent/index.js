import React, { Component } from 'react';

import Layout from '../../sharedComponent/Layout';
import Work from "./Work";

class WorkComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <Work />
                </Layout>
            </>
        )
    }
}

export default WorkComponent;