import React, { Component } from 'react'
import { Container, Segment, Header, Icon, Form, Message } from 'semantic-ui-react';

export class ForgetPasswordComponent extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            message: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    handleInput = (e) => {
        this.setState({email: e.target.value})
    }

    onSubmit() {
        this.setState({message: true})
    }

    render() {
    const { email } = this.state
    return (
        <div style={{backgroundColor: '#CFCFCF'}}>
            <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                    <Header as='h1'><Icon name='key' />Forget password</Header>
                    {this.state.message && <Message error header='This feature does not work yet. Please create new account.' />}
                    <Form>
                        <Form.Input placeholder='Enter your e-mail' name='email' value={email} onChange={this.handleInput} />
                        <Form.Button color='blue' size='huge' onClick={this.onSubmit}>Submit</Form.Button>
                    </Form>
                </Segment>
            </Container>
        </div>
        )
    }
}

export default ForgetPasswordComponent