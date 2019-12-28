import React, { Component } from 'react';

import speaker from "../../assets/pronounce.png";
import sample1 from "../../assets/html-design.JPG";
import sample2 from "../../assets/2.png";
import sample4 from "../../assets/4.png";
import webdevelopment from "../../assets/webdevelopment.svg";
import developeractivity from "../../assets/developeractivity.svg"


class Home extends Component {
    render() {
        return (
            <>
                <section className="home">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 home__number">
                                <div className="home-first">
                                    <span className="home-01">01</span>
                                    <span className="hr-vertical" />
                                    <span className="hr-horizontal" />
                                    <span className="home-text">home</span>
                                </div>
                            </div>
                            <div className="col-md-9 home__second">
                                <div className="home__switch">
                                    <div className="home__switch-1">
                                        <h1 className="home__second-main-1">Hello,</h1>
                                        <h1 className="home__second-main-2">I'm Moyin</h1><br />
                                        <div className="home__second-desc">
                                            <div className="home__second-pronounce">
                                                <img src={speaker} alt="pronounce icon" className="resize" /> <span className="home__second-pronounce-text">Pronunciation : /'moyin' /</span>
                                            </div>
                                            <p className="home__second-introduction">
                                                I like to create performance and scalabe FE products, bringing a range of <br />
                                                talents to the table, from a knack for technical details to a broad understanding of user experience.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="home__illustration text-center">
                                        <div className="home__illustration-side home__illustration-side--front">
                                            <img src={webdevelopment} alt="Skill icon" />
                                        </div>
                                        <div className="home__illustration-side home__illustration-side--back home__illustration--back-1">
                                            <img src={developeractivity} alt="Coding icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row home__third">
                                    <div className="col-md-4 composition">
                                        <img className="composition__photo" src={sample1} alt="html design for resume maker app" />
                                    </div>
                                    <div className="col-md-4 composition">
                                        <img className="composition__photo" src={sample2} alt="social media app design" />
                                    </div>
                                    <div className="col-md-4 composition">
                                        <img className="composition__photo" src={sample4} alt="digital business website" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home