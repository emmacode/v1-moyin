import React, { PureComponent } from 'react';
import arrowdown from "../../assets/arrowdown.png";

import plume from "../../assets/plume.png";
import digitx from "../../assets/digitx.png";
import digitx2 from "../../assets/digitx2.png";
import creatella from "../../assets/creatella.jpg";
import calenpoint from "../../assets/calenpoint.png";
import calenpoint2 from "../../assets/calenpoint2.png";

class Project extends PureComponent {

    render() {
        return (
            <>
                <a href id="projects"></a>
                <section className="project__body">
                    <div className="project__02 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <div className="project__02-head">
                            <i className="project__02-i">02</i>
                            <h1>MY PROJECTS</h1>
                        </div>
                        <hr className="project__hr" />
                    </div>
                    <div className="project__detail wow fadeInUp" data-wow-duration="1.5s">
                        <div className="project__detail1">
                            <div className="project__desc-title">Plume</div>
                            <div className="project__desc-img">
                                <img src={plume} alt="plume" className="plume" />
                            </div>
                            <div className="project__desc">
                                <span>Website application, <br /> Business Search Engine</span>
                                <span>2020</span>
                            </div>
                            <hr className="project__desc-hr" />
                        </div>

                        <div className="project__detail2">
                            <a href="https://digitx.netlify.com/" target="_blank">
                                <div className="project__desc-title">Digitx</div>
                                <div className="project__desc-img">
                                    <img src={digitx} alt="digitx" className="digitx" />
                                    <img src={digitx2} alt="digitx" className="digitx2" />

                                </div>
                                <div className="project__desc">
                                    <span>Website design, <br /> Digital Marketing Service</span>
                                    <span>2018</span>
                                </div>
                            </a>
                            <hr className="project__desc-hr" />
                        </div>

                        <div className="project__detail3">
                            <button className="button button--outline--light button--large">
                                <span><img src={arrowdown} alt="arrowdown" className="arrowdown" /></span>
                                <div className="overlay">
                                    <div className="text">I'm happy you are here! Enjoy my projects 😎</div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="project__detail-second wow fadeInUp" data-wow-duration="1.5s">
                        <div className="project__detail-row2-1">
                            <button className="button button--outline--light button--large">
                                <span><img src={arrowdown} alt="arrowright" className="arrowright" /></span>
                                <div className="overlay">
                                    <div className="text">It will make you WOW! 😉</div>
                                </div>
                            </button>
                        </div>

                        <div className="project__detail-row2-2">
                            <a href="https://github.com/emmacode/creatella-test" target="_blank">
                                <div className="project__desc-title">Creatella Faces</div>
                                <div className="project__desc-img">
                                    <img src={creatella} alt="creatella" className="creatella" />
                                </div>
                                <div className="project__desc">
                                    <span>Website application, <br /> Emoji Search Engine (google font like)</span>
                                    <span>2019</span>
                                </div>
                            </a>
                            <hr className="project__desc-hr" />
                        </div>

                        <div className="project__detail-row2-3">
                            <a href="https://calenpoint.netlify.com/" target="_blank">
                                <div className="project__desc-title">calenpoint</div>
                                <div className="project__desc-img">
                                    <img src={calenpoint} alt="tcode" className="calenpoint" />
                                    <img src={calenpoint2} alt="tcode" className="calenpoint2" />
                                </div>
                                <div className="project__desc">
                                    <span>Website design, <br /> Investing Scheme</span>
                                    <span>2019</span>
                                </div>
                            </a>
                            <hr className="project__desc-hr" />
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default Project;