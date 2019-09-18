import React, { Component } from 'react'
import { Container, Segment, Table, Checkbox, Button, Header, Progress, Grid, Icon } from 'semantic-ui-react'

export class ListsComponent extends Component {

    constructor() {
        super()

        this.state = {
            username: 'Artur',
            lists: [
            {
                listname: 'My first list',
                todos: [
                    {
                        isDone: false,
                        priority: 2,
                        description: 'Learn to cook'
                    },
                    {
                        isDone: true,
                        priority: 1,
                        description: 'Learn to code'
                    },
                    {
                        isDone: false,
                        priority: 3,
                        description: 'Go shopping'
                    }
                ],
                progress: 0.33
            },
            {
                listname: 'My second list',
                todos: [
                    {
                        isDone: true,
                        priority: 1,
                        description: 'Buy medicines'
                    },
                    {
                        isDone: false,
                        priority: 3,
                        description: 'Feed the cat'
                    }
                ],
                progress: 0.5
            },
            {
                listname: 'My third list',
                todos: [
                    {
                        isDone: true,
                        priority: 2,
                        description: 'Buy milk'
                    },
                    {
                        isDone: false,
                        priority: 1,
                        description: 'Buy brain'
                    },
                    {
                        isDone: true,
                        priority: 3,
                        description: 'Buy whores'
                    },
                    {
                        isDone: true,
                        priority: 2,
                        description: 'Buy cocaine'
                    }
                ],
                progress: 0.75
            }
        ]}

        this.getPriority = this.getPriority.bind(this);
        this.getCompleteness = this.getCompleteness.bind(this);
        // this.calculateProgress = this.calculateProgress.bind(this);
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


    // calculateProgress(list) {
    //     let completed = list.todos.map( (todo) => {return todo.isDone}).filter( (todo) => {return todo===true});
    //     console.log(completed.lenght)
    //     //console.log('Complete status of list: ' + list.listname + ' is ' + completed + ' completed tasks')
    //     return completed/list.todos.lenght
    // }

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
                                    <Table.Cell>{todo.description}</Table.Cell>
                                    <Table.Cell>
                                        {/* <Button color='violet'>Edit</Button> */}
                                        <Icon link size='large' color='grey' name='edit' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {/* <Button color='red'>Delete</Button> */}
                                        <Icon link size='large' color='grey' name='trash' />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                    )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5' textAlign='right'>
                                        {/* <Button floated='right' color='green'>Add</Button> */}
                                        <Icon link name='add' size='large' color='grey' floated='right' />
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        <Progress percent={list.progress*100} color='violet' progress />
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
