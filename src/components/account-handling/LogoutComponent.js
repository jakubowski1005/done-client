import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

export class LogoutComponent extends Component {
    constructor() {
        super()

        this.state = {
            redirect: false,
            time: 10
        }
    }

    componentDidMount() {
        this.id = setTimeout( () => this.setState({redirect: true}), 10000)
        this.interval = setInterval( () => this.setState({time: this.state.time-1}), 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.id)
    }

    render() {
        return (
            this.state.redirect ? <Redirect to='/' /> :
            <div>
                <Container>
                    <Header>
                        You have been logged out. 
                        You will be automatically moved to the home page after {this.state.time} seconds. 
                        Click <Link to='/'>here</Link> to do it now.
                    </Header>
                </Container>
            </div>
        )
    }
}

export default LogoutComponent
