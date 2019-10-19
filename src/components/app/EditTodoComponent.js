import React, { Component } from 'react'
import { Table, Icon, Dropdown, Input } from 'semantic-ui-react'

export class EditTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: this.props.data.description,
            isDone: this.props.data.isDone,
            priority: this.props.data.priority
        }

        this.okIconClicked = this.okIconClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    okIconClicked() {

        this.setState({description: this.description.value})
        this.props.handler()
    }


    handleChange = (e, { priority }) => this.setState({ priority: priority })



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
                            <Input ref={desc => this.description = desc} placeholder='Description' />
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

  const priorities = [{
          key: 0,
          text: <Icon name='exclamation'/>,
          value: 0
      },
      {
          key: 1,
          text: <Icon name='exclamation'/>,//<Icon name='exclamation'/>,
          value: 1
      },
      {
          key: 2,
          text: <Icon name='exclamation'/>,//<Icon name='exclamation'/><Icon name='exclamation'/>,
          value: 2
      }
  ]