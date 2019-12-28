import React, { Component } from 'react';

import Contact from "./Contact";
import Layout from '../../sharedComponent/Layout';

class ContactComponent extends Component {
    render() {
        return (
            <>
                <Layout {...this.props}>
                    <Contact />
                </Layout>
            </>
        )
    }
}

export default ContactComponent;