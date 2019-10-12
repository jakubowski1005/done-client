import React, { Component } from 'react'
import TodoComponent from './TodoComponent'
import EditTodoComponent from './EditTodoComponent'

export class TodoTemplateComponent extends Component {
    constructor() {
        super()

        this.state = {
            editMode: false,
            id: -1,
            description: '',
            isDone: false,
            priority: 1
        }
    }

    componentDidMount() {
        this.setState({
            editMode: false,
            id: 1,
            description: 'desc',
            isDone: false,
            priority: 2
        })
    }

    handleTodoStateChange() {
        
    }

    render() {
        return (
            <>
                {!this.state.editMode && <TodoComponent />}
                {this.state.editMode && <EditTodoComponent />}
            </>
        )
    }
}

export default TodoTemplateComponent
