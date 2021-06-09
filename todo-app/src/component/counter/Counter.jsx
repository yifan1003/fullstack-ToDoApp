import React, {Component} from 'react';
import PropTypes from 'prop-types'
import "./Counter.css"

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}> Reset</button>
                </div>
            </div>
        );
    }

    reset() {
        this.setState(
            {
                counter: 0
            }
        )
    }


    increment(by) {
        console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
                // counter : this.state.counter + by
            }
        )
    }

    decrement(by) {
        console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
                // counter : this.state.counter + by
            }
        )
    }
}

class CounterButton extends Component {
    decrement = () => { // update state - counter--;


        this.setState({
            counter: this.state.counter - this.props.by
        });
        this.props.decrementMethod(this.props.by);
    }

    // Define the initial state in a constructor
    // state => counter 0
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
    }

    render = () => {
        return (
            <div className="CounterButton">

                <button onClick={this.increment}> + {this.props.by}</button>
                <button onClick={this.decrement}> - {this.props.by}</button>
            </div>
        )
    }
    // for arrow function, don't need to do binding
    increment = () => { // update state - counter++;

        // this.state.counter++; Bad Practice
        this.setState({
            counter: this.state.counter + this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }
}

// make default property
CounterButton.defaultProps = {
    by: 1
}
CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter
