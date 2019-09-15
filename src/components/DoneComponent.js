import React, { Component } from 'react'
import WelcomeComponent from './landing-page/WelcomeComponent'
import HeaderComponent from './HeaderComponent';
import CardsComponent from './landing-page/CardsComponent'
import ContactComponent from './landing-page/ContactComponent'
import FooterComponent from './FooterComponent'

export class DoneComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <WelcomeComponent />
                <CardsComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default DoneComponent
