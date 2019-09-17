import React, { Component } from 'react'
import { Container, Form, Input, TextArea, Button, Grid, Image } from 'semantic-ui-react';
import People from '../../images/people.svg';

export class ContactComponent extends Component {
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
                                >
                                </Form.Field>
                                <Form.Field
                                control={Input}
                                placeholder='E-mail'
                                width={4}
                                >
                                </Form.Field>
                            </Form.Group>
                            <Form.Field
                            control={TextArea}
                            placeholder='Tell us about your issues and ideas'
                            >
                            </Form.Field>
                            <Container textAlign='left'><Button color='blue' size='medium'>Confirm</Button></Container>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
            </div>
        )
    }
}

export default ContactComponent
