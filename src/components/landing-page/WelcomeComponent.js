import React, { Component } from 'react'
import { Grid, Button, Image, Divider } from 'semantic-ui-react';

export class WelcomeComponent extends Component {
    render() {
        return (
            <>
             <Grid columns={2} padded>
                 <Grid.Column>
                    <p>DIVIDE AND CONQUER</p>
                    <p>Complete your daily tasks using baby steps method</p>
                    <Button color='blue' size='massive'>Get started</Button>
                 </Grid.Column>
                 <Grid.Column>
                    <Image src='src/images/img1.png' size='small' rounded />
                 </Grid.Column>
             </Grid>
             <Divider />
            </>
        )
    }
}

export default WelcomeComponent
