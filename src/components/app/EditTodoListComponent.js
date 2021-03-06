import React, { Component } from 'react'
import { Segment, Table, Progress, Grid, Icon, Input, Dropdown, Label } from 'semantic-ui-react'
import TodoTemplateComponent from './TodoTemplateComponent'
import TodoListService from '../../services/TodoListService'
import { colors } from '../../constants/Data'

export class EditTodoListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.data.id,
            listname: this.props.data.listname,
            color: this.props.data.color,
            todos: this.props.data.todos
        }

        this.calculateProgress = this.calculateProgress.bind(this);
        this.okIconClicked = this.okIconClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    calculateProgress() {
        let completed = Object.keys(this.state.todos.filter((todo) => {
            return todo.isDone === true
        })).length;
        let all = Object.keys(this.state.todos).length;
        let progress = completed / all;
        return Math.round(progress * 100);
    }

    okIconClicked() {

        const userId = sessionStorage.getItem('id')
        const list = {
            listname: this.state.listname,
            color: this.state.color,
            todos: this.state.todos,
            user_id: parseInt(userId)
        }
           
        if(this.state.id === -1) {
            TodoListService.addNewList(userId, list)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {  
            TodoListService.updateList(userId, this.state.id, list)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        this.props.handler()
        this.props.refresh()
       }


    handleChange = (e, color) => {
        this.setState({ color: color.value })
    }

    handleInput = (e) => {
        this.setState({listname: e.target.value})
    }

    render() {
        const { color } = this.state.color
        return (
            <div>
                <Grid.Column width={8}>
                    <Segment textAlign='center' style={{maxWidth: '500px', marginTop: '50px'}}>
                        <Input onChange={this.handleInput} placeholder='Enter a listname...' />
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
                            { this.state.todos.map( (todo) => <TodoTemplateComponent data={todo} listId={this.state.id}/> )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='1'>
                                        <Dropdown
                                          onChange={this.handleChange}
                                          placeholder='Color'
                                          options={colors}
                                          selection
                                          value={color}
                                        />
                                    </Table.HeaderCell>
                                    <Table.HeaderCell colSpan='5' textAlign='right'>
                                        <Icon link name='check' size='large' color='grey' floated='right' onClick={this.okIconClicked}/>
                                        <Icon link name='cancel' size='large' color='grey' floated='right' onClick={this.props.handler} />
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

export default EditTodoListComponent



// function mapColorToNumberValue(color) {

//     switch(color) {
//         case 'green':
//             return 0
//         case 'red':
//             return 1
//         case 'blue':
//             return 2
//         case 'purple':
//             return 3
//         case 'pink':
//             return 4
//         case 'orange':
//             return 5
//         case 'yellow':
//             return 6
//         case 'grey':
//             return 8
//         default:
//             return 0

//     }
// }