import React, { Component } from 'react'
import { Container, Segment, Header, Icon, Form } from 'semantic-ui-react';

export class LoginComponent extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign in</Header>
                        <Form>
                            <Form.Input placeholder='Username or E-mail'></Form.Input>
                            <Form.Input placeholder='Password' type='password' />
                            <Form.Checkbox label='Remember me' />
                            <Form.Button color='blue' size='huge'>Submit</Form.Button>
                        </Form>
                        <p style={{padding: '20px'}}>Forget password</p>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default LoginComponent
