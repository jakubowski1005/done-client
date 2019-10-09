import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Icon, Form, Message } from 'semantic-ui-react';
import AuthService from '../../services/AuthService';

export class RegisterCompnent extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errorMessage: ''
        }

        this.registerButtonClicked = this.registerButtonClicked.bind(this)
        this.registerButtonClicked = this.registerButtonClicked.bind(this)
    }

    registerButtonClicked() {

        if (this.state.password !== this.state.passwordConfirmation) {
            this.setState({errorMessage: 'Password and password confirmation are different.'})
            return;
        }

        AuthService.registerUser(this.state.username, this.state.email, this.state.password)
            .then( () => {
                this.setState({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                })
                this.props.history.push('/login')
            })
            .catch( (err) => {
                this.setState({
                    errorMessage: err.data
                })
            })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    

    render() {
        const { username, email, password, passwordConfirmation } = this.state
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                {this.state.errorMessage !== '' && <Message error header={this.state.errorMessage}/>}
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign up</Header>
                        <Form>
                            <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange}/>
                            <Form.Input placeholder='E-mail' name='email' value={email} onChange={this.handleChange}/>
                            <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange}/>
                            <Form.Input placeholder='Confirm password' name = 'passwordConfirmation' type='password' value={passwordConfirmation} onChange={this.handleChange}/>
                            <Form.Checkbox label={<span>I agree to the <a href='/terms'>Terms and Conditions</a></span>} />
                            <Form.Button color='blue' size='huge' onClick={this.registerButtonClicked}>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default RegisterCompnent
