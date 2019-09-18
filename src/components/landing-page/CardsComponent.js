import React, { Component } from 'react'
import { Container, Grid, Card, Placeholder, Header } from 'semantic-ui-react';

export class CardsComponent extends Component {
    render() {
        return (
            <div>
            <Container textAlign='center' style={{margin: '50px'}}>
                <Header as='h1' style={{fontSize: '2rem', margin: '50px'}}>Welcome to Done! application</Header>
                <Grid columns={3}>
                    <Grid.Column style={{margin: '50px 0 50px'}} >
                        <Card>
                            {/* <Image src='' wrapped ui={false} /> */}
                            <Placeholder style={{weight: '300px', height: '180px'}}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Card.Content>
                                <Card.Header>Be more organized!</Card.Header>
                                <Card.Description>Done! keeps all your task list always close to you </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column style={{margin: '50px 0 50px'}}>
                        <Card>
                            {/* <Image src='' wrapped ui={false} /> */}
                            <Placeholder style={{weight: '300px', height: '180px'}}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Card.Content>
                                <Card.Header>Don't waste your time!</Card.Header>
                                <Card.Description>Dividing one task into smaller ones helps you to complete it faster</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column style={{margin: '50px 0 50px'}}>
                        <Card>
                            {/* <Image src='' wrapped ui={false} /> */}
                            <Placeholder style={{weight: '300px', height: '180px'}}>
                                <Placeholder.Image />
                            </Placeholder>
                            <Card.Content>
                                <Card.Header>It's super simple!</Card.Header>
                                <Card.Description>Simple interface helps you focus on what is important</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
            </div>
        )
    }
}

export default CardsComponent
