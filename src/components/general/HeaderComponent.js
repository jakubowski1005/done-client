import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Menu, Icon } from 'semantic-ui-react'

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

                     <Menu.Menu position="right" width={6}>

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
                        
                     </Menu.Menu>
                 </Menu>
             </Container>
        )
    }
}

export default HeaderComponent
