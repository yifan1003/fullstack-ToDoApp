import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

class LogoutComponent extends Component {
    render() {
        return (
        <>
        <h1> You are loggedout </h1>
        <div>
            Thank You for Using Our Application.
        </div>
        </>
    )
    }
}

export default LogoutComponent