import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

export const colorsArr = [{
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
      
export function mapColorToNumberValue(color) {

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