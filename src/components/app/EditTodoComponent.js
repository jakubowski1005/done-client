import React, { Component } from 'react'
import { Table, Icon, Dropdown, Input } from 'semantic-ui-react'

export class EditTodoComponent extends Component {
    constructor() {
        super()

        this.state = {
            description: '',
            isDone: false,
            priority: 1
        }
    }

    okIconClicked() {

        this.setState({description: this.description.value})
    }

    cancelIconClicked() {

    }

    handleChange = (e, { priority }) => this.setState({ priority: priority })


    render() {

        const { value } = this.state.priority

        return (
            //<>
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
                          value={value}
                        /></Table.Cell>
                        <Table.Cell>
                            <Input ref={desc => this.description = desc} placeholder='Description' />
                        </Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='check' onClick={this.okIconClicked} />
                        </Table.Cell>
                        <Table.Cell>
                            <Icon link size='large' color='grey' name='cancel' onClick={this.cancelIconClicked} />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            //</>
        )
    }
}

export default EditTodoComponent

  const priorities = [{
          key: 1,
          text: `${<span><Icon name='exclamation'/></span>}`,
          value: 1
      },
      {
          key: 2,
          text: `${<span><Icon name='exclamation'/><Icon name='exclamation'/></span>}`,
          value: 2
      },
      {
          key: 3,
          text: `${<span><Icon name='exclamation'/><Icon name='exclamation'/><Icon name='exclamation'/></span>}`,
          value: 3
      }
  ]