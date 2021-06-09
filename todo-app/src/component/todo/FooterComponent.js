import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class FooterComponent extends Component {
    render() {
        return (
            <footer className = "footer" >
            <span className = "text-muted"> All RightsReserved 2018 </span>
            </footer>
    )
    }
}

export default FooterComponent