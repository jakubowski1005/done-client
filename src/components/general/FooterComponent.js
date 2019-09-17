import React, { Component } from 'react'
import { Container, List, Icon, Divider } from 'semantic-ui-react';

export class FooterComponent extends Component {
    render() {
        const styling = {
            backgroundColor: '#222A59',
            color: 'white',
        }

        return (
            <div style={styling}>
                <Container textAlign='center' fluid>
                    <List divided horizontal size='massive' relaxed='very' verticalAlign='bottom'>
                        <List.Item href='http://facebook.com/'>
                            <Icon name='facebook' size='huge' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                        <List.Item href='http://linkedin.com/'>
                            <Icon name='linkedin' size='huge' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                        <List.Item href='http://github.com/'>
                            <Icon name='github' size='huge' style={{color: 'white', paddingTop: '20px'}}/>
                        </List.Item>
                    </List>
                    <Divider />
                    <p style={{paddingBottom: '14px', fontSize: '1.5rem'}}>Copyright &copy; {new Date().getFullYear()} Artur Jakubowski. All rights reserved.</p>
                </Container>
            </div>
        )
    }
}

export default FooterComponent
