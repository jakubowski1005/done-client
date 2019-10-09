// import React, { Component } from 'react'
// import { Table, Icon } from 'semantic-ui-react'

// export class TodoComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {}
//     }

//     componentDidMount() {
//         // receive todo from api
//     }

//     editIconClicked() {

//     }

//     deleteIconClicked() {

//     }

//     render(props) {
//         return (
//             <div>
//                 <Table.Body>
//                     <Table.Row>
//                         <Table.Cell>
//                             {this.getCompleteness(props.todo)}
//                         </Table.Cell>
//                         <Table.Cell>{this.getPriority(todo)}</Table.Cell>
//                         {!todo.descEditMode && <Table.Cell>{todo.description}</Table.Cell>}
//                         {todo.descEditMode && <Table.Cell>Input</Table.Cell>}
//                         <Table.Cell>
//                             {/* <Button color='violet'>Edit</Button> */}
//                             <Icon link size='large' color='grey' name='edit' onClick={this.editIconClicked} />
//                         </Table.Cell>
//                         <Table.Cell>
//                             {/* <Button color='red'>Delete</Button> */}
//                             <Icon link size='large' color='grey' name='trash' onClick={this.deleteIconClicked} />
//                         </Table.Cell>
//                     </Table.Row>
//                 </Table.Body>
//             </div>
//         )
//     }
// }

// export default TodoComponent
