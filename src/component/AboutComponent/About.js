import React, { Component } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import aboutimg from "../../assets/about.svg";
import skill from "../../assets/skill.svg";
import coding from "../../assets/coding.svg";

class About extends Component {
    render() {
        const skills = [
            { text: "JavaScript" },
            { text: "JSX" },
            { text: "HTML" },
            { text: "CSS" },
            { text: "SASS" },
            { text: "WordPress" },
            { text: "SquareSpace" },
            { text: "React" },
            { text: "Redux" },
            { text: "Git" },
            { text: "Bootstrap" },
            { text: "Material UI" },
            { text: "Javascript" },
            { text: "SEO" },
            { text: "Node" },
            { text: "Flutter" },
            { text: "Typing" },
            { text: "Proofreading" }
        ]
        return (
            <>
                <section className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>About Me</h2>
                                <p className="about__paragraph">
                                    The main area of my expertise is front end development <br />
                                    (Client side of the web).
                <br /><br />
                                    HTML, CSS, JS(TypeScript), building small and medium
                                    Web apps with React JS, custom plugins, features, animations, and coding interactive layouts.
                <br /><br />
                                    Most recently, I was a Junior front end engineer with Eltas building Javascript applications and interfaces for organisations and Individuals.
                <br /><br />
                                    I dream of becoming a successful tech entreprenuer and help solving real life world issues rather <br /> than exaggerating "making the world a better place".
                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <img src={aboutimg} alt="About Me icon" className="about__image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about__skill">
                    <div className="container">
                        <div className="row about__skill-switch">
                            <div className="col-md-6 text-center">
                                {/* Card */}
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <img src={skill} alt="Skill icon" className="about__image" />
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <img src={coding} alt="Coding icon" className="about__image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Skills</h2>
                                <div className="skill d-flex align-content-start flex-wrap">
                                    {skills.map((skill, i) => (
                                        <span key={i}>{skill.text}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about__social">
                    <h2 className="text-center label">Follow Me</h2>
                    <div className="container">
                        <div className="row about__social-icon">
                            <span>
                                <a href="http://www.linkedin.com/in/afolabi-moyinoluwa-64b196137">
                                    <LinkedInIcon style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                            </span>
                            <span>
                                <a href="https://twitter.com/soft_moyin">
                                    <TwitterIcon style={{ fontSize: "20px" }} className="bounce" />
                                </a>
                            </span>
                            <span>
                                <a href="https://github.com/emmacode"><GitHubIcon style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                            </span>
                            <span>
                                <a href="https://www.instagram.com/moyinafolabi/">
                                    <InstagramIcon style={{ fontSize: "20px", color: "#fff" }} />
                                </a>
                            </span>
                        </div>
                    </div>
                </section>
                <section className="about__follow">
                    <div className="container">
                        <div className="row menu">
                            <h4 className="label">Hover on Me to follow</h4>
                            <div className="spacer"></div>
                            <div className="item">
                                <span>
                                    <a href="http://www.linkedin.com/in/afolabi-moyinoluwa-64b196137">
                                        <LinkedInIcon style={{ fontSize: "20px", color: "#fff" }} />
                                    </a>
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    <a href="https://twitter.com/soft_moyin">
                                        <TwitterIcon style={{ fontSize: "20px" }} className="bounce" />
                                    </a>
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    <a href="https://github.com/emmacode"><GitHubIcon style={{ fontSize: "20px", color: "#fff" }} />
                                    </a>
                                </span>
                            </div>
                            <div className="item">
                                <span><a href="https://www.instagram.com/moyinafolabi/">
                                    <InstagramIcon style={{ fontSize: "20px", color: "#fff" }} />
                                </a></span>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About;