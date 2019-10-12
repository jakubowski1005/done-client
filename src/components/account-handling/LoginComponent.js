import React, { Component } from 'react'
import { Container, Segment, Header, Icon, Form, Message } from 'semantic-ui-react';
import AuthService from '../../services/AuthService'

export class LoginComponent extends Component {
    constructor() {
        super()

        this.state = {
            usernameOrEmail: '',
            password: '',
            hasFailed: false,
            message: ''
        }

        this.loginClicked = this.loginClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    loginClicked() {
        AuthService.loginUser(this.state.usernameOrEmail, this.state.password)
            .then( (res) => {
                AuthService.registerSuccessfulLoginForJwt(this.state.usernameOrEmail, res.data.token);
                window.location.assign('/')
            })
            .catch( (err) => {
                this.setState({hasFailed: true, message: err.data})
            })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        const { usernameOrEmail, password } = this.state
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                {this.state.hasFailed && <Message error header={this.state.message} />}
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign in</Header>
                        <Form>
                            <Form.Input placeholder='Username or E-mail' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} />
                            <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange} />
                            <Form.Checkbox label='Remember me' />
                            <Form.Button color='blue' size='huge' onClick={this.loginClicked}>Submit</Form.Button>
                        </Form>
                        <p style={{padding: '20px'}}>Forget password</p>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default LoginComponent
