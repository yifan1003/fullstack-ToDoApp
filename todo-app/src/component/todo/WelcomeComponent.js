import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.state = {
            welcomeMessage : ''
        }
    }
    render() {
        return (
            <>
                <h1> Welcome </h1>
                <div className = "container" >
                    Welcome{this.props.match.params.name}.
                    You can manage your todos <Link to= "/todo"> here </Link>
                </div>
                <div className="container">
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success"> 
                   Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
    )
    }
    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessfulResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        

    }

    handleSuccessfulResponse(response) {
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
        
    }
}

export default WelcomeComponent