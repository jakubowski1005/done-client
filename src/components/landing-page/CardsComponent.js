import React, { Component } from 'react'
import { Container, Grid, Image, Card, Divider } from 'semantic-ui-react';

export class CardsComponent extends Component {
    render() {
        return (
            <>
            <Container textAlign='center'>
                <h1>Welcome to done</h1>
                <Grid columns={3}>
                    <Grid.Column>
                        <Card>
                            <Image src='' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Card 1 header</Card.Header>
                                <Card.Description>desc</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Image src='' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Card 2 header</Card.Header>
                                <Card.Description>desc</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Image src='' wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>Card 3 header</Card.Header>
                                <Card.Description>desc</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
            <Divider />
            </>
        )
    }
}

export default CardsComponent
