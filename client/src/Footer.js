import React, { Component } from 'react'

const footerStyle = {
    position: "absolute",
    right: "0",
    bottom: "0",
    left: "0",
    height: "3rem",
    backgroundColor: "black",
    color: "white"
}


class Footer extends Component{
    render() {
        return(
            <footer style={footerStyle}>
            <p>Created with React and Material-UI.</p>
            </footer>
        )
    }
}

export default Footer;
