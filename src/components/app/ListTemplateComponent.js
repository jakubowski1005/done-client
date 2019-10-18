import React, { Component } from 'react'
import TodoListComponent from './TodoListComponent'
import EditTodoListComponent from './EditTodoListComponent'

export class ListTemplateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            id: this.props.data.id,
            listname: this.props.data.listname,
            color: this.props.data.color,
            todos: this.props.data.todos
        }

        this.editModeHandler = this.editModeHandler.bind(this)
    }

    editModeHandler() {
        this.setState({editMode: !this.state.editMode})
        this.props.refresh()
    }


    render() {
        return (
            <>
            {this.state.editMode && <EditTodoListComponent refresh={this.props.refresh} handler={this.editModeHandler} data={{id: this.state.id, listname: this.state.listname, color: this.state.color, todos: this.state.todos}} />}
            {!this.state.editMode && <TodoListComponent refresh={this.props.refresh} handler={this.editModeHandler} data={{id: this.state.id, listname: this.state.listname, color: this.state.color, todos: this.state.todos}} />}
            </>
        )
    }
}

export default ListTemplateComponent


