import React, { Component } from 'react'
import { Table, Icon, Dropdown, Input } from 'semantic-ui-react'
import TodoService from '../../services/TodoService'
import { priorities } from '../../constants/Data'

export class EditTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.data.id,
            description: this.props.data.description,
            isDone: this.props.data.isDone,
            priority: this.props.data.priority,
            listId: this.props.listId,
        }

        this.okIconClicked = this.okIconClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    okIconClicked() {

        const todo = {
            description: this.state.description,
            isDone: false,
            priority: this.state.priority
        }

        const userId = parseInt(sessionStorage.getItem('id'))

        if (this.state.id === -1) {
           TodoService.createTodo(userId, this.state.listId, todo)
           .then(this.props.refresh())
        } else {
           TodoService.updateTodo(userId, this.state.listId, this.state.id, todo)
            .then(this.props.refresh())
        }
        this.props.refresh()
        this.props.handler()
    }


    handleChange = (e, priority) => this.setState({ priority: priority.value.toUpperCase() })

    handleInput = (e) => this.setState({description: e.target.value})

    render() {
        const { priority } = this.state.priority

        return (
                 <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        </Table.Cell>
                        <Table.Cell>  
                        <Dropdown
                          onChange={this.handleChange}
                          placeholder='Priority'
                          options={priorities}
                          selection
                          value={priority}
                        /></Table.Cell>
                        <Table.Cell>
                            <Input onChange={this.handleInput} placeholder='Description' />
                        </Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='check' onClick={this.okIconClicked} />
                        </Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='cancel' onClick={this.props.handler} />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
        )
    }
}

export default EditTodoComponent