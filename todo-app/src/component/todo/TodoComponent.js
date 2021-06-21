import React, {Component} from 'react'
import moment from 'moment'
import {Formik,Form, Field, validateYupSchema, ErrorMessage} from 'formik'
import TodoDataService from '../../api/todo/ToDoDataService'
import AuthenticationService from '../todo/AuthenticationService'
class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : ' ',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    componentDidMount() {
        if(this.state.id === -1){
            return 
        }
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate:  moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }
    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in description'
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid date'
        }
        return errors;
    }
    onSubmit(values) {
        // console.log(values)
        let username =  AuthenticationService.getLoggedInUserName()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/todos'))
        }

        console.log(values);
    }

    render() {
        // let description = this.state.description
        // let targetDate = this.state.targetDate
        // Restructuring in Javascript
        let {description, targetDate} = this.state
        return <div>
            <h1>Todo</h1>
            <div className="container">
                    {/* // if the key is equal to the vaule, we don't need : 
                    // description: description,
                    // targetDate: targetDate */}
                <Formik 
                    initialValues={{ description, targetDate}}
                    onSubmit={this.onSubmit}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" 
                                        className="alert alert-warning"></ErrorMessage>
                                <ErrorMessage name="targetDate" component="div" 
                                        className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
            {/* Todo Component for id - {this.state.id} */}
            </div>
        
    }
}
export default TodoComponent