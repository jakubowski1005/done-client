import React, { Component } from 'react'
import { Container, Grid, Message, Icon, Placeholder, Segment, Input, Button, Dropdown } from 'semantic-ui-react'
import UserService from '../../services/UserService'
import { countries, genders } from '../../constants/Data'

export class SettingsComponent extends Component {
    constructor() {
        super()

        this.state = {
            id: -1,
            name: '',
            lastName: '',
            gender: '',
            nationality: ''
        }

        this.deleteAccount = this.deleteAccount.bind(this)
        this.confirmChanges = this.confirmChanges.bind(this)
    }

    componentDidMount() {

    UserService.retrieveUserByUsernameOrEmail(sessionStorage.getItem('autheticatedUser'))
        .then(res => {
            console.log(res)
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

    handleChange = e => this.setState({[e.target.name]: e.target.value})

    render() {
        const gender = this.state.gender
        const nationality = this.state.nationality

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
                            <Segment>
                                <Input placeholder={this.state.name === '' ? 'Name' : this.state.name} name='name' onChange={this.handleInput} />
                                <Input placeholder={this.state.name === '' ? 'Last Name' : this.state.name} name='lastName' onChange={this.handleInput} />
                                <Dropdown
                                    onChange={this.handleChange}
                                    name='gender'
                                    placeholder='Gender'
                                    options={genders}
                                    selection
                                    value={gender}/>
                                <Dropdown
                                    onChange={this.handleChange}
                                    name='nationality'
                                    placeholder='Nationality'
                                    options={countries}
                                    selection
                                    value={nationality}/>
                                <Button color='blue' onClick={this.confirmChanges}>Confirm</Button>
                            </Segment>
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


