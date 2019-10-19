import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Icon, Form, Message, Loader } from 'semantic-ui-react';
import AuthService from '../../services/AuthService'

export class LoginComponent extends Component {
    constructor() {
        super()

        this.state = {
            usernameOrEmail: '',
            password: '',
            hasFailed: false,
            message: '',
            loading: false
        }

        this.loginClicked = this.loginClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    loginClicked() {
        this.setState({loading: true})

        if(this.state.usernameOrEmail === '' && this.state.password === '') {
            this.setState({message: 'Fields cannot be empty', hasFailed: true, loading: false})
            return
        }

        AuthService.loginUser(this.state.usernameOrEmail, this.state.password)
            .then( (res) => {
                AuthService.registerSuccessfulLoginForJwt(this.state.usernameOrEmail, res.data.accessToken);
                window.location.assign('/');
            })
            .catch( (err) => {
                this.setState({hasFailed: true, message: 'Invalid credentials', loading: false})
            })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        const { usernameOrEmail, password } = this.state
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign in</Header>
                        {this.state.hasFailed && <Message error header={this.state.message} />}
                        <Form>
                            <Form.Input placeholder='Username or E-mail' name='usernameOrEmail' value={usernameOrEmail} onChange={this.handleChange} />
                            <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange} />
                            <Form.Checkbox label='Remember me' />
                            <Form.Button color='blue' size='huge' onClick={this.loginClicked} style={{minWidth: '140px'}}>
                                {this.state.loading && <Loader active inline size='tiny' />}
                                {!this.state.loading && 'Submit'}
                            </Form.Button>
                        </Form>
                        <div>
                            <Link to={'/forgetpassword'} style={{padding: '40px 20px 0', color: 'grey'}}>Forget password</Link>
                        </div>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default LoginComponent
