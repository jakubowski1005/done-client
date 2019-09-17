import React, { Component } from 'react'
import WelcomeComponent from './landing-page/WelcomeComponent'
import HeaderComponent from './HeaderComponent';
import CardsComponent from './landing-page/CardsComponent'
import ContactComponent from './landing-page/ContactComponent'
import FooterComponent from './FooterComponent'
import { Sticky } from 'semantic-ui-react';

export class DoneComponent extends Component {
    render() {
        return (
            <div>
                <Sticky>
                <HeaderComponent />
                </Sticky>
                <WelcomeComponent />
                <CardsComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
        )
    }
}

export default DoneComponent
