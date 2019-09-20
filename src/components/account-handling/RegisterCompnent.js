import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Icon, Form } from 'semantic-ui-react';

export class RegisterCompnent extends Component {
    constructor() {
        super()

        this.func = this.func.bind(this)
    }

    func() {
        return <span>I agree to the <a href='/terms'>Terms and Conditions</a></span>
    }

    render() {
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{minHeight: '700px', paddingTop: '100px'}}>
                    <Segment textAlign='center' style={{width: '600px', paddingTop: '50px', margin: '0 250px 0'}}>
                        <Icon name='user' size='huge'/>
                        <Header as='h1'>Sign up</Header>
                        <Form>
                            <Form.Input placeholder='Username' />
                            <Form.Input placeholder='E-mail' />
                            <Form.Input placeholder='Password' type='password' />
                            <Form.Input placeholder='Confirm password' type='password' />
                            <Form.Checkbox label={<span>I agree to the <a href='/terms'>Terms and Conditions</a></span>} />
                            <Form.Button color='blue' size='huge'>Submit</Form.Button>
                        </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default RegisterCompnent
