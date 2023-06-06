import React, { Component } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DetailsIcon from '@material-ui/icons/Details';

class Home extends Component {
    render() {
        return (
            <>
                <section className="wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1s">
                    <div className="home__body">
                        <div className="home__banner">
                            <div className="home__banner-desc">
                                <h1>Afolabi Moyinoluwa</h1>
                                <i>Creative Front-End Engineer</i>
                                <div className="button-slide slide-diagonal">
                                    About Me
                                    <span>
                                        <ArrowRightAltIcon />
                                    </span>
                                </div>
                            </div>
                            <div className="home__banner-social">
                                <div className="home__banner-social-item">
                                    <span>
                                        <a href="https://twitter.com/soft_moyin">
                                            <TwitterIcon style={{ fontSize: "30px", color: "#e6f1ff" }} />
                                        </a>
                                    </span>
                                </div>
                                <div className="home__banner-social-item">
                                    <span>
                                        <a href="http://www.linkedin.com/in/afolabi-moyinoluwa-64b196137">
                                            <LinkedInIcon style={{ fontSize: "30px", color: "#e6f1ff" }} />
                                        </a>
                                    </span>
                                </div>
                                <div className="home__banner-social-item">
                                    <span>
                                        <a href="https://github.com/emmacode">
                                            <GitHubIcon style={{ fontSize: "30px", color: "#e6f1ff" }} />
                                        </a>
                                    </span>
                                </div>
                                <div className="home__banner-social-item">
                                    <span>
                                        <a href="https://www.instagram.com/soft_moy/">
                                            <InstagramIcon style={{ fontSize: "30px", color: "#e6f1ff" }} />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-mouse">
                        <span>
                            <DetailsIcon style={{ fontSize: "30px" }} />
                        </span>
                    </div>
                </section>
            </>
        )
    }
}

export default Home