import React, { Component } from 'react'
import { Container, Segment, Table, Checkbox, Button, Header, Progress, Grid, Icon } from 'semantic-ui-react'
import EditTodoComponent from '../app/EditTodoComponent'
import TodoComponent from '../app/TodoComponent'

export class ListsComponent extends Component {

    constructor() {
        super()

        this.state = {
            id: 1,
            username: 'Artur',
            lists: [
            {
                id: 1,
                listname: 'My first list',
                todos: [
                    {
                        id: 1,
                        isDone: false,
                        priority: 2,
                        description: 'Learn to cook',
                        descEditMode: false
                    },
                    {
                        id: 2,
                        isDone: true,
                        priority: 1,
                        description: 'Learn to code',
                        descEditMode: false
                    },
                    {
                        id: 3,
                        isDone: false,
                        priority: 3,
                        description: 'Go shopping',
                        descEditMode: false
                    }
                ]
            },
            {
                id: 2,
                listname: 'My second list',
                todos: [
                    {
                        id: 4,
                        isDone: true,
                        priority: 1,
                        description: 'Buy medicines',
                        descEditMode: false
                    },
                    {
                        id: 5,
                        isDone: false,
                        priority: 3,
                        description: 'Feed the cat',
                        descEditMode: false
                    }
                ]
            },
            {
                id: 3,
                listname: 'My third list',
                todos: [
                    {
                        id: 6,
                        isDone: true,
                        priority: 2,
                        description: 'Buy milk',
                        descEditMode: false
                    },
                    {
                        id: 7,
                        isDone: false,
                        priority: 1,
                        description: 'Buy brain',
                        descEditMode: false
                    },
                    {
                        id: 8,
                        isDone: true,
                        priority: 3,
                        description: 'Buy whores',
                        descEditMode: false
                    },
                    {
                        id: 9,
                        isDone: true,
                        priority: 2,
                        description: 'Buy cocaine',
                        descEditMode: false
                    }
                ]
            }
        ]}

        this.getPriority = this.getPriority.bind(this);
        this.getCompleteness = this.getCompleteness.bind(this);
        this.calculateProgress = this.calculateProgress.bind(this);
        this.editButtonClicked = this.editButtonClicked.bind(this);
    }

    getCompleteness(todo) {
        if(todo.isDone) {
            return <Checkbox defaultChecked />
        }
        return (<Checkbox />)
    }

    getPriority(todo) {
        switch (todo.priority) {
            case 1:
                return <span><Icon fitted name='exclamation' /></span>
            case 2:
                return <span><Icon fitted name='exclamation' /><Icon fitted name='exclamation' /></span>
            case 3:
                return <span><Icon fitted name='exclamation' /><Icon fitted name='exclamation' /><Icon fitted name='exclamation' /></span>
            default:
                return <span><Icon fitted name='question' /></span>
        }

        // setCompletness(todo) {
        //     this.setState( (prevState, todo) => ({todo.isDone: {`${!prevState.isDone}`}}))
        // }
    }


    calculateProgress(list) {
        let completed = Object.keys(list.todos.filter( (todo) => {return todo.isDone===true})).length;
        let all = Object.keys(list.todos).length;
        let progress = completed/all;
        return Math.round(progress*100);
    }

    editButtonClicked(todo) {
        // let x = {...this.state.lists.todos.descEditMode}
        // x.descEditMode = true;
        // this.setState({x})
        console.log(todo)
    }

    render() {

        return (
            <div style={{backgroundColor: '#CFCFCF'}}>
                <Container textAlign='center' style={{padding: '50px 0 50px'}}>
                    <Header as='h1'>Hello {this.state.username}, here you can manage your lists.</Header>
                    <Button color='violet' size='large'>Add new list</Button>
                    <Grid>
                    { this.state.lists.map( (list) =>
                    <Grid.Column width={8}>
                    <Segment textAlign='center' style={{maxWidth: '500px', marginTop: '50px'}}>
                        <Header style={{color: 'black', fontSize: '2rem'}}>{list.listname}</Header>
                        <Table color='blue' inverted textAlign='center' width='400px'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Done?</Table.HeaderCell>
                                    <Table.HeaderCell>Priority</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                    <Table.HeaderCell>Edit</Table.HeaderCell>
                                    <Table.HeaderCell>Delete</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            { list.todos.map( (todo) =>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        {this.getCompleteness(todo)}
                                    </Table.Cell>
                                    <Table.Cell>{this.getPriority(todo)}</Table.Cell>
                                    {!todo.descEditMode && <Table.Cell>{todo.description}</Table.Cell>}
                                    {todo.descEditMode && <Table.Cell>Input</Table.Cell>}
                                    <Table.Cell>
                                        {/* <Button color='violet'>Edit</Button> */}
                                        <Icon link size='large' color='grey' name='edit' onClick={this.editButtonClicked} />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {/* <Button color='red'>Delete</Button> */}
                                        <Icon link size='large' color='grey' name='trash' />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                    )}
                            <EditTodoComponent />
                            <TodoComponent />
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5' textAlign='right'>
                                        {/* <Button floated='right' color='green'>Add</Button> */}
                                        <Icon link name='add' size='large' color='grey' floated='right' />
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        <Progress percent={this.calculateProgress(list)} color='violet' progress />
                    </Segment>
                    </Grid.Column>
                    )}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default ListsComponent
