import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Icon, Divider } from 'semantic-ui-react';

export class FooterComponent extends Component {
    render() {
        return (
            <>
                <Container textAlign='center'>
                    <List divided horizontal size='massive' relaxed='very'>
                        <List.Item>
                            <a href='http://facebook.com/'>
                                <Icon name='facebook' size='big' />
                            </a>
                        </List.Item>
                        <List.Item>
                            <a href='http://linkedin.com/'>
                                <Icon name='linkedin' size='big' />
                            </a>
                        </List.Item>
                        <List.Item>
                            <a href='http://github.com/'>
                                <Icon name='github' size='big' />
                            </a>
                        </List.Item>
                    </List>
                    <Divider />
                    <p>Copyright &copy; {new Date().getFullYear()} Artur Jakubowski. All rights reserved.</p>
                    <Divider />
                </Container>
            </>
        )
    }
}

export default FooterComponent
