import React, { Component } from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'

export class ErrorComponent extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{fontSize: '4rem', padding: '200px 0 200px'}}>
                    <Header size='huge' color='violet'>
                        <Icon name='frown outline' /> 404
                    </Header>
                </Container>
            </div>
        )
    }
}

export default ErrorComponent
