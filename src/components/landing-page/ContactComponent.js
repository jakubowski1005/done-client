import React, { Component } from 'react'
import { Container, Form, Input, TextArea, Button, Grid, Image } from 'semantic-ui-react';
import People from '../../images/people.svg';

export class ContactComponent extends Component {
    constructor() {
        super()

        this.state = {
            email: 'jakubowski1005@gmail.com',
            name: '',
            subject: '',
            content: ''
        }

        this.confirmButtonClicked = this.confirmButtonClicked.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    confirmButtonClicked() {
        const url = `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.content}`
        if(this.state.name !== '' && this.state.subject !== '' && this.state.content !== '') {
            window.location.assign(url)
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div style={{backgroundColor: '#CFCFCF', }}>
            <Container textAlign='center' style={{padding: '100px 0 100px'}}>
                
                <Grid>
                    <Grid.Column width={8}>
                        <Image src={People} size='large' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <h1>Contact us</h1>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field
                                control={Input}
                                placeholder='Name'
                                width={4}
                                onChange={this.handleInput}
                                name='name'
                                >
                                </Form.Field>
                                <Form.Field
                                control={Input}
                                placeholder='Subject'
                                width={4}
                                onChange={this.handleInput}
                                name='subject'
                                >
                                </Form.Field>
                            </Form.Group>
                            <Form.Field
                            control={TextArea}
                            placeholder='Tell us about your issues and ideas'
                            onChange={this.handleInput}
                            name='content'
                            >
                            </Form.Field>
                            <Container textAlign='left'><Button color='blue' size='medium' onClick={this.confirmButtonClicked}>Confirm</Button></Container>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
            </div>
        )
    }
}

export default ContactComponent
