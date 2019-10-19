import React, { Component } from 'react'
import { Container, Segment, Header, Icon, Form, Message, Loader } from 'semantic-ui-react';
import AuthService from '../../services/AuthService';

export class RegisterCompnent extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            check: false,
            errorMessage: '',
            loading: false
        }

        this.registerButtonClicked = this.registerButtonClicked.bind(this)
        this.registerButtonClicked = this.registerButtonClicked.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    registerButtonClicked() {
        this.setState({loading: true})

        if (this.state.check === false) {
            this.setState({errorMessage: 'You must accept Terms and Conditions.', loading: false})
            return
        }

        if (this.state.password !== this.state.passwordConfirmation) {
            this.setState({errorMessage: 'Password and password confirmation are different.', loading: false})
            return;
        }

        if (this.state.username === '' || this.state.email === '' || this.state.password === '') {
            this.setState({errorMessage: 'Fields cannot be empty.', loading: false})
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
                console.log(err)
                this.setState({
                    errorMessage: 'Please input correct values.',
                    loading: false
                })
            })
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleCheck = (e) => this.setState({check: !this.state.check})
    

    render() {
        const { username, email, password, passwordConfirmation } = this.state
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign up</Header>
                        {this.state.errorMessage !== '' && <Message error header={this.state.errorMessage}/>}
                        <Form>
                            <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange}/>
                            <Form.Input placeholder='E-mail' name='email' value={email} onChange={this.handleChange}/>
                            <Form.Input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange}/>
                            <Form.Input placeholder='Confirm password' name = 'passwordConfirmation' type='password' value={passwordConfirmation} onChange={this.handleChange}/>
                            <Form.Checkbox onChange={this.handleCheck} label={<label>I accept the <a href='/'>Terms of Service</a></label>} />
                            <Form.Button color='blue' size='huge' onClick={this.registerButtonClicked}>
                                {!this.state.loading && 'Submit'}
                                {this.state.loading && <Loader active inline size='tiny' />}
                            </Form.Button>
                        </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default RegisterCompnent
