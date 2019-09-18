import React, { Component } from 'react'
import { Container, Grid, Message, Icon, Statistic, Placeholder, Segment } from 'semantic-ui-react'

export class ProfileComponent extends Component {
    constructor() {
        super()

        this.state = {
            name: 'Artur',
            lastName: 'Jakubowski',
            gender: 'male',
            nationality: 'pl',
            stats: {
                    completedTasks: 13,
                    completedLists: 2,
                    daysWithApp: 8,
                    activeLists: 1
            }
        }

        this.getFullName = this.getFullName.bind(this)
        this.getGenderIcon = this.getGenderIcon.bind(this)
    }

    getFullName() {
        let fullName = this.state.name + ' ' + this.state.lastName;
        return fullName
    }

    getGenderIcon() {
        if(this.state.gender === 'male') {
            return <span><Icon name='man' /> Man</span>
        }
        return <span><Icon name='woman' /> Woman</span>
    }

    getFlag() {
        return <span><Icon name={this.state.nationality} /> Poland</span>
    }

    render() {
        return (
            <div>
                <Container padding='50px 50px 50px' textAlign='center'>
                    <Grid style={{padding: '100px 0 100px'}}>
                        <Grid.Column width={4}>
                        <Placeholder>
                            <Placeholder.Image square />
                        </Placeholder>
                        </Grid.Column>
                        <Grid.Column width={4} style={{fontSize: '3rem'}}>
                            <Segment vertical>{this.getFullName()}</Segment>
                            <Segment vertical>{this.getGenderIcon()}</Segment>
                            <Segment vertical>{this.getFlag()}</Segment>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Message color='violet'>
                                <Message.Header><Icon name='chart bar' /> Statistics</Message.Header>
                                <Statistic.Group horizontal>
                                    <Statistic>
                                        <Statistic.Value>{this.state.stats.activeLists}</Statistic.Value>
                                        <Statistic.Label>Active lists</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>{this.state.stats.completedTasks}</Statistic.Value>
                                        <Statistic.Label>Completed tasks</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>{this.state.stats.completedLists}</Statistic.Value>
                                        <Statistic.Label>Completed lists</Statistic.Label>
                                    </Statistic>
                                    <Statistic>
                                        <Statistic.Value>{this.state.stats.daysWithApp}</Statistic.Value>
                                        <Statistic.Label>Days with us</Statistic.Label>
                                    </Statistic>
                                </Statistic.Group>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default ProfileComponent
