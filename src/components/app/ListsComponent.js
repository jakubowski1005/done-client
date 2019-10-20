import React, { Component } from 'react'
import { Container, Button, Header, Grid } from 'semantic-ui-react'
import AuthService from '../../services/AuthService'
import TodoListService from '../../services/TodoListService'
import UserService from '../../services/UserService'
import ListTemplateComponent from './ListTemplateComponent'
import EditTodoListComponent from './EditTodoListComponent'

export class ListsComponent extends Component {

    constructor() {
        super()

        this.state = {
            newListVisible: false,
            userId: -1,
            username: AuthService.getLoggedInUsername(),
            lists: []
        }

        this.handleNewListVisibility = this.handleNewListVisibility.bind(this)
        this.refreshLists = this.refreshLists.bind(this)
    }

    componentDidMount() {
        this.refreshLists()
    }

    refreshLists() {
        UserService.retrieveUserByUsernameOrEmail(this.state.username)
            .then(res => {
                this.setState({
                    userId: res.data[0].id,
                })
                sessionStorage.setItem('id', res.data[0].id)

                TodoListService.retrieveAllLists(this.state.userId)
                    .then(res => {
                        this.setState({
                            lists: res.data
                        })
                    }).catch(err => console.log(err));

            }).catch(err => console.log(err))
    }

    handleNewListVisibility() {
        this.setState({newListVisible: !this.state.newListVisible})
        this.refreshLists()
    }


    render() {
        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{padding: '50px 0 50px'}}>
                    <Header as='h1'>Hello {this.state.username}, here you can manage your lists.</Header>
                    <Button color='violet' size='large' onClick={() => this.setState({newListVisible: !this.state.newListVisible})}>Add new list</Button>
                    <Grid>
                    { this.state.newListVisible && <EditTodoListComponent refresh={this.refreshLists} handler={this.handleNewListVisibility} data={{editMode: true, id: -1, color: 'violet', todos: []}} />}
                    { this.state.lists.map( (list) =>
                        <ListTemplateComponent key={list.id} refresh={this.refreshLists} data={list} />
                    )}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default ListsComponent