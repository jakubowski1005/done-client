import React, { Component } from 'react'
import { Segment, Table, Header, Progress, Grid, Icon, Label } from 'semantic-ui-react'
import TodoTemplateComponent from './TodoTemplateComponent'
import TodoListService from '../../services/TodoListService'

export class TodoListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.data.id,
            listname: this.props.data.listname,
            color: this.props.data.color,
            todos: this.props.data.todos
        }

        this.calculateProgress = this.calculateProgress.bind(this);
        this.addIconClicked = this.addIconClicked.bind(this)
        this.deleteIconClicked = this.deleteIconClicked.bind(this)
    }



    calculateProgress() {
        let completed = Object.keys(this.state.todos.filter((todo) => {
            return todo.isDone === true
        })).length;
        let all = Object.keys(this.state.todos).length;
        let progress = completed / all;
        return Math.round(progress * 100);
    }

    addIconClicked() {
        console.log('http post')
    }

    deleteIconClicked() {
        const userId = parseInt(sessionStorage.getItem('id'))
        TodoListService.deleteList(userId, this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        this.props.refresh()
    }


    render() {
        return (
            <div>
                <Grid.Column width={8}>
                    <Segment textAlign='center' style={{maxWidth: '500px', marginTop: '50px'}}>
                        <Header style={{color: 'black', fontSize: '2rem'}}>{this.state.listname}</Header>
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
                            { this.state.todos.map( (todo) => <TodoTemplateComponent data={todo} />)}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='1'>
                                        <Label circular color={this.state.color.toLowerCase()} />
                                    </Table.HeaderCell>
                                    <Table.HeaderCell colSpan='3' textAlign='right'>
                                        <Icon link name='add' size='large' color='grey' floated='right' onClick={this.addIconClicked} />
                                    </Table.HeaderCell>
                                    <Table.HeaderCell colSpan='4' textAlign='right'>
                                        <Icon link name='edit' size='large' color='grey' floated='right' onClick={this.props.handler}/>
                                    </Table.HeaderCell>
                                    <Table.HeaderCell colSpan='5' textAlign='right'>
                                        <Icon link name='trash' size='large' color='grey' floated='right' onClick={this.deleteIconClicked}/>
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                        <Progress percent={this.calculateProgress()} color='violet' progress />
                    </Segment>
                    </Grid.Column>
            </div>
        )
    }
}

export default TodoListComponent
