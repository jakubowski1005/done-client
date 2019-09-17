import React, { Component } from 'react'
import WelcomeComponent from './WelcomeComponent';
import CardsComponent from './CardsComponent';
import ContactComponent from './ContactComponent';

export class LandingPageComponent extends Component {
    render() {
        return (
            <div>
                <WelcomeComponent />
                <CardsComponent />
                <ContactComponent />
            </div>
        )
    }
}

export default LandingPageComponent
