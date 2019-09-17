import React, { Component } from 'react'
import { Container, Menu, Icon, List } from 'semantic-ui-react'

export class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {
            activeItem: 'home'
        }

        this.handleItemClick = this.handleItemClick.bind(this)
        this.isUserLoggedIn = this.isUserLoggedIn.bind(this)
    }

    handleItemClick(event, {name}) {
        this.setState({activeItem: name})
    }

    isUserLoggedIn() {
        return true;
    }


    render() {
        const { activeItem } = this.state;
        const styling = {
            backgroundColor: '#222A59',
            color: 'white'
        }
        return (
            <Container fluid>
                 <Menu pointing secondary inverted color={'violet'} size='massive'>
                     <Menu.Item
                      name='home'
                      active={activeItem === 'home'}
                      onClick={this.handleItemClick}
                      ><Icon name='check square' />Done!
                      </Menu.Item>
                     <Menu.Menu position="right" width={6}>
                         <Menu.Item
                         name='signin'
                         active={activeItem === 'signin'}
                         onClick={this.handleItemClick}
                         >Sign In
                         </Menu.Item>
                         <Menu.Item
                         name='signup'
                         active={activeItem === 'signup'}
                         onClick={this.handleItemClick}
                         >Sign Up
                        </Menu.Item>
                     </Menu.Menu>
                 </Menu>
                 {/* <List horizontal size={'large'}>
                    <List.Item>
                        <Icon name='check square'/>Done!
                    </List.Item>
                    </List>
                    <List textAlign='right'>
                        <List.Item>Sign In</List.Item>
                        <List.Item>Profile</List.Item>
                        <List.Item>Sign Up</List.Item>
                        <List.Item>Logout</List.Item>
                    </List> */}
                 
             </Container>
        )
    }
}

export default HeaderComponent
