import React, { Component } from 'react'
import { Container, Form, Input, TextArea, Button, Divider } from 'semantic-ui-react';

export class ContactComponent extends Component {
    render() {
        return (
            <>
            <Container textAlign='center'>
                <h1>Contact us</h1>
                <Form>
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
                    <Form.Field
                    control={TextArea}
                    placeholder='Tell us about your issues and ideas'
                    >
                    </Form.Field>
                    <Button color='blue' size='medium'>Confirm</Button>
                </Form>
            </Container>
            <Divider />
            </>
        )
    }
}

export default ContactComponent
