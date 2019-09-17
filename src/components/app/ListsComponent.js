import React, { Component } from 'react'
import { Container, Segment, Table, Checkbox, Button, Header, Progress, Grid } from 'semantic-ui-react'

export class ListsComponent extends Component {

    constructor() {
        super()

        this.state = {
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
                return '!'
            case 2:
                return '!!'
            case 3:
                return '!!!'
            default:
                return 'no data'
        }
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
                    <Header as='h1'>Hello Artur, here you can manage your lists.</Header>
                    <Button color='violet' size='large'>Add new list</Button>
                    <Grid>
                    { this.state.lists.map( (list) =>
                    <Grid.Column width={8}>
                    <Segment textAlign='center' style={{maxWidth: '500px', marginTop: '50px'}}>
                        <Header style={{color: 'black', fontSize: '2rem'}}>{list.listname}</Header>
                        <Table color='blue' inverted collapsing>
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
                                        <Button color='violet'>Edit</Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button color='violet'>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                    )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='5'>
                                        <Button floated='right' color='blue'>Add</Button>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        <Progress percent={list.progress} color='violet' progress />
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
