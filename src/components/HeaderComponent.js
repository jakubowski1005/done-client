import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/'>
                        <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        ><Icon name='check square' />Done!
                        </Menu.Item>
                      </Link>
                     <Menu.Menu position="right" width={6}>
                        <Link to='/login'>
                         <Menu.Item
                         name='signin'
                         active={activeItem === 'signin'}
                         onClick={this.handleItemClick}
                         link='/login'
                         >Sign In
                         </Menu.Item>
                        </Link>
                        <Link to='/register'>
                         <Menu.Item
                         name='signup'
                         active={activeItem === 'signup'}
                         onClick={this.handleItemClick}
                         >Sign Up
                         </Menu.Item>
                        </Link>
                     </Menu.Menu>
                 </Menu>
                 
             </Container>
        )
    }
}

export default HeaderComponent
