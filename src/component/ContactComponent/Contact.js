import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="book">
                                <div className="book__form">
                                    <form action="#" className="form">
                                        <div className="u-margin-bottom-medium">
                                            <h2 className="heading-secondary text-center">
                                                Send me a message!
                                    </h2>
                                            <p className="contact__intro text-center">If you’d like to chat about a project please fill in the form below and <br />
                                                I’ll get back within 1-2 days.
                                             </p>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form__input" placeholder="Full name" id="name" required />
                                            <label for="name" className="form__label">Full name</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                            <label for="email" className="form__label">Email address</label>
                                        </div>
                                        <div className="form-group text-center">
                                            <button className="btn btn--purple btn--animated">shoot &rarr;</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact;