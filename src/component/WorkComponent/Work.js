import React, { Component } from 'react'

class Work extends Component {
    render() {
        const texts = [
            { span: "My cake is too hot 😉" }
        ]
        return (
            <div className="text-center" style={{ margin: "20rem" }}>
                <h1 style={{ fontSize: "70px", fontWeight: "700" }}>Am coming soon!</h1>
                {texts.map((text, i) => (
                    <h1 style={{ fontSize: "30px", fontWeight: "400" }} key={i}>{text.span}</h1>
                ))}
            </div>
        )
    }
}

export default Work;