import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react'

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

        return (
            <Container fluid>
                 <Menu pointing secondary inverted color={'violet'} size='massive'>

                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to='/'
                        ><Icon name='check square' />Done!
                        </Menu.Item>

                     {!this.isUserLoggedIn && <Menu.Menu position="right" width={6}>
                         <Menu.Item
                         name='signin'
                         active={activeItem === 'signin'}
                         onClick={this.handleItemClick}
                         as={Link} to='/login'
                         >Sign In
                         </Menu.Item>
                         <Menu.Item
                         name='signup'
                         active={activeItem === 'signup'}
                         onClick={this.handleItemClick}
                         as={Link} to='/register'>Sign up
                         </Menu.Item>
                     </Menu.Menu>}

                     {this.isUserLoggedIn && <Menu.Menu position="right" width={6}>
                        <Dropdown item trigger={<span><Icon name='user' /> Profile</span>}>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/lists'><Icon name='list ul' /> Lists</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/profile'><Icon name='user circle' /> Profile</Dropdown.Item>
                                <Dropdown.Item as={Link} to='/settings'><Icon name='setting' /> Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                         <Menu.Item
                         name='logout'
                         active={activeItem === 'logout'}
                         onClick={this.handleItemClick}
                         as={Link} to='/logout'>Logout
                         </Menu.Item>
                     </Menu.Menu>}
                 </Menu>
             </Container>
        )
    }
}

export default HeaderComponent
