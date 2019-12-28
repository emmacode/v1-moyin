import React, { Component } from 'react';

import Navbar from "../sharedComponent/navbar/Navbar";
import GlobalStyles from "../sharedComponent/Global";

class Layout extends Component {
    state = {
        navbarOpen: false
    }

    handleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { children } = this.props
        return (
            <>
                <div style={{ width: "100%", height: "auto" }}>
                    <Navbar navbarState={this.state.navbarOpen}
                        handleNavbar={this.handleNavbar}
                    />
                    <GlobalStyles />
                    {children}
                </div>
            </>
        )
    }
}

export default Layout;