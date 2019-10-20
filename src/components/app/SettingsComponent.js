import React, { Component } from 'react'
import { Container, Grid, Message, Icon, Placeholder, Segment, Input, Button } from 'semantic-ui-react'
import UserService from '../../services/UserService'

export class SettingsComponent extends Component {
    constructor() {
        super()

        this.state = {}

        this.deleteAccount = this.deleteAccount.bind(this)
        this.confirmChanges = this.confirmChanges.bind(this)
    }

    componentDidMount() {

    UserService.retrieveUserByUsernameOrEmail(sessionStorage.getItem('autheticatedUser'))
        .then(res => {
            this.setState({
            id: res.data.id,
            name: res.data.userProperties.name,
            lastName: res.data.userProperties.lastName,
            gender: res.data.userProperties.gender,
            nationality: res.data.userProperties.nationality
        })
    })
    }

    deleteAccount() {
        console.log('delete user with id: ' + this.state.id)
    }

    confirmChanges() {
        console.log('confirm changes')
    }

    handleInput = e => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <div>
                <Container padding='50px 50px 50px' textAlign='center'>
                    <Grid style={{padding: '100px 0 100px'}}>
                        <Grid.Column width={4} textAlign='center'>
                        <Placeholder>
                            <Placeholder.Image square />
                        </Placeholder>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='center'>
                            <Input placeholder={this.state.name === '' ? 'Name' : this.state.name} name='name' onChange={this.handleInput} />
                            <Input placeholder={this.state.name === '' ? 'Lastname' : this.state.name} name='lastName' onChange={this.handleInput} />
                            <Button color='blue' onClick={this.confirmChanges}>Confirm</Button>
                        </Grid.Column>
                        <Grid.Column width={4} textAlign='center'>
                            <Message color='red'>
                                <Message.Header><Icon name='trash' /> Delete account</Message.Header>
                                <Button color='red' size='huge' onClick={this.deleteAccount}>Good bye</Button>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default SettingsComponent
