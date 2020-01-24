import React, { PureComponent } from 'react'

class Contact extends PureComponent {
    render() {
        return (
            <>
                <section className="contact__body wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                    <div className="contact__details">
                        Say hello, <br />
                        <a href="mailto:afolabimoyinoluwa4@gmail.com" target="_blank">Send me an email</a>!<br />
                        Or check my <br />
                        <a href="www.linkedin.com/in/afolabi-moyinoluwa-64b196137" target="_blank">
                            LinkedIn
                        </a><br />
                        and <a href="https://twitter.com/soft_moyin" target="_blank">Twitter</a>.
                    </div>
                </section>
            </>
        )
    }
}

export default Contact;