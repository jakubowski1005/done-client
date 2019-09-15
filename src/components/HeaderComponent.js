import React, { Component } from 'react'
import { Segment, Menu } from 'semantic-ui-react'

export class HeaderComponent extends Component {
    constructor() {
        super()

        this.state = {
            activeItem: ''
        }

        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(event) {
        this.setState({activeItem: event.target.name})
    }

    render() {
        return (
            <Segment inverted>
                 <Menu inverted pointing secondary>
                     <Menu.Item>Done!</Menu.Item>
                     <Menu.Menu position="right">
                         <Menu.Item>Sign In</Menu.Item>
                         <Menu.Item>Sign Up</Menu.Item>
                     </Menu.Menu>
                 </Menu>
             </Segment>
        )
    }
}

export default HeaderComponent
