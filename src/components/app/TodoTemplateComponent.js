import React, { Component } from 'react'
import TodoComponent from './TodoComponent'
import EditTodoComponent from './EditTodoComponent'

export class TodoTemplateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            id: this.props.data.id,
            description: this.props.data.description,
            isDone: false,
            priority: this.props.data.priority,
            listId: this.props.listId
        }

        this.editModeHandler = this.editModeHandler.bind(this)
    }


    editModeHandler() {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        return (
            <>
                {!this.state.editMode && <TodoComponent refresh={this.props.refresh} handler={this.editModeHandler} listId={this.state.listId} data={{id: this.state.id, description: this.state.description, priority: this.state.priority, isDone: this.state.idDone}} />}
                {this.state.editMode && <EditTodoComponent refresh={this.props.refresh} handler={this.editModeHandler} listId={this.state.listId} data={{id: this.state.id, description: this.state.description, priority: this.state.priority, isDone: this.state.idDone}} />}
            </>
        )
    }
}

export default TodoTemplateComponent
