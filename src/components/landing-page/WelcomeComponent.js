import React, { Component } from 'react'
import { Grid, Button, Image, Container, Header } from 'semantic-ui-react';
import List from '../../images/list.svg';
import Desk from '../../images/desk.png';


export class WelcomeComponent extends Component {
    render() {
        const styling = {
            backgroundColor: '#222A59',
            color: 'white',
            
            minHeight: '400px'
        }
        return (
            <div >
            <Container fluid textAlign='center' style={styling}>
             <Grid padded>
                 <Grid.Column width={10}>
                    <Container>
                    <Image src={List} floated='left' size='small' style={{margin: 0}}/>
                    {/* <Container textAlign='center'> */}
                    <Header style={{color: 'white', fontSize: '5rem'}}>divide and conquer</Header>
                    </Container>
                    <Container>
                        <Header style={{color: 'white', fontSize: '3rem'}}>complete your daily tasks using baby steps method</Header>
                        <Button color='blue' size='massive'>Get started</Button>
                    </Container>
                    {/* </Container> */}
                 </Grid.Column>
                 <Grid.Column width={6}>
                    <Image src={Desk} size='massive' />
                 </Grid.Column>
             </Grid>
             </Container>
            </div>
        )
    }
}

export default WelcomeComponent
