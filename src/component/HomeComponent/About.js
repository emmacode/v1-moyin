import React, { PureComponent } from 'react'

class About extends PureComponent {
    render() {
        const skills = [
            { text: "JavaScript" },
            { text: "JSX" },
            { text: "HTML" },
            { text: "CSS" },
            { text: "SASS" },
            { text: "React" },
            { text: "Redux" },
            { text: "Git" },
            { text: "Bootstrap" },
            { text: "Material UI" },
            { text: "Node" },
            { text: "Flutter" },
        ]
        return (
            <>
                <div id="about"></div>
                <section className="about__body wow fadeInUp" data-wow-duration="1.5s">
                    <div className="about__02">
                        <div className="about__02-head">
                            <i className="about__02-i">03</i>
                            <h1>ABOUT MOYIN</h1>
                        </div>
                        <hr className="about__hr" />
                    </div>
                    <div className="about__me">
                        The main area of my expertise is front end development <br />
                        (Client side of the web).
                <br /><br />
                        HTML, CSS, JS(TypeScript), building small and medium
                        Web apps with React JS, custom plugins, features, animations, and coding interactive layouts.
                <br /><br />
                        Currently a third year student at <a href="https://oauife.edu.ng/">OAU</a> and
                        also a front end engineer with <a href="https://www.elta.com.ng/">Elta Solutions</a> building Javascript applications and interfaces for organisations and Individuals.
                <br /><br />
                        I dream of becoming a successful tech entreprenuer and help solving real life world issues rather than exaggerating "making the world a better place".
                </div>
                    <div className="about__skill wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                        <h3>Skills</h3>
                        <div className="skill">
                            {skills.map((skill, i) => (
                                <span key={i}>{skill.text}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About;