import React, { Component } from 'react'
import { Segment, Table, Checkbox, Progress, Grid, Icon, Input, Dropdown, Label } from 'semantic-ui-react'
import TodoTemplateComponent from './TodoTemplateComponent'
import TodoListService from '../../services/TodoListService'
//import { colorsArr, mapColorToNumberValue } from './ColorsManager'

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
           console.log(this.state)
           const list = {
               listname: this.state.listname,
               color: mapColorToNumberValue(this.state.color),
               todos: this.state.todos
           }
           console.log(list)
           const userId = sessionStorage.getItem('id')

           this.state.id === -1 ? TodoListService.addNewList(userId, list) : TodoListService.updateList(userId, this.state.id, list)
       }


    handleChange = (e, color) => {
        this.setState({ color: color.value })
    }

    handleInput = (e) => {
        this.setState({listname: e.target.value})
    }

    render() {

        const { color } = this.state.color
        //const colors = colorsArr


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
                            { this.state.todos.map( (todo) => <TodoTemplateComponent data={todo} /> )}
                            <Table.Footer fullWidth>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='1'>
                                        <Dropdown
                                          onChange={this.handleChange}
                                          placeholder='Color'
                                          options={colorsArr}
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

const colorsArr = [{
          key: 'green',
          text: <Label circular color='green'/>,
          value: 'green'
      },
      {
          key: 'red',
          text: <Label circular color='red'/>,
          value: 'red'
      },
      {
          key: 'blue',
          text: <Label circular color='blue'/>,
          value: 'blue'
      },
      {
          key: 'purple',
          text: <Label circular color='purple'/>,
          value: 'purple'
      },
      {
          key: 'pink',
          text: <Label circular color='pink'/>,
          value: 'pink'
      },
      {
          key: 'orange',
          text: <Label circular color='orange'/>,
          value: 'orange'
      },
      {
          key: 'yellow',
          text: <Label circular color='yellow'/>,
          value: 'yellow'
      },
      {
          key: 'grey',
          text: <Label circular color='grey'/>,
          value: 'grey'
      }]

function mapColorToNumberValue(color) {

    switch(color) {
        case 'green':
            return 0
        case 'red':
            return 1
        case 'blue':
            return 2
        case 'purple':
            return 3
        case 'pink':
            return 4
        case 'orange':
            return 5
        case 'yellow':
            return 6
        case 'grey':
            return 8
        default:
            return 0

    }
}