import React, { Component } from 'react'
import { Table, Icon, Checkbox } from 'semantic-ui-react'
import TodoService from '../../services/TodoService'

export class TodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.data.id,
            description: this.props.data.description,
            isDone: this.props.data.isDone,
            priority: this.props.data.priority,
            listId: this.props.listId
        }

        this.deleteIconClicked = this.deleteIconClicked.bind(this)
        this.getPriority = this.getPriority.bind(this)
    }


    deleteIconClicked() {
        const userId = parseInt(sessionStorage.getItem('id'))
        TodoService.deleteTodo(userId, this.state.listId, this.state.id)
            .then(this.props.refresh())
        this.props.refresh()
    }

    getPriority(priority) {
        switch (priority) {
            case "NORMAL":
                return <span><Icon fitted name = 'exclamation' /></span>
            case "HIGH":
                return <span><Icon fitted name = 'exclamation' /><Icon fitted name = 'exclamation' /></span>
            case "URGENT":
                return <span><Icon fitted name = 'exclamation' /><Icon fitted name = 'exclamation' /><Icon fitted name = 'exclamation' /> </span>
            default:
                return <span><Icon fitted name = 'question'/></span>
        }
    }

    handleCheck = (e) => {
        console.log(this.state.isDone)
        this.setState({isDone: !this.state.isDone})}

    render() {
        return (
            <>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.state.isDone ? <Checkbox defaultChecked onChange={this.handleCheck} /> : <Checkbox onChange={this.handleCheck} />}</Table.Cell>
                        <Table.Cell>{this.getPriority(this.state.priority)}</Table.Cell>
                        <Table.Cell>{this.state.description}</Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='edit' onClick={this.props.handler} />
                        </Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='trash' onClick={this.deleteIconClicked} />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </>
        )
    }
}

export default TodoComponent
