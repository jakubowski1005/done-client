import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WelcomeComponent from './landing-page/WelcomeComponent'
import HeaderComponent from './HeaderComponent';
import CardsComponent from './landing-page/CardsComponent'
import ContactComponent from './landing-page/ContactComponent'
import FooterComponent from './FooterComponent'
import { Sticky } from 'semantic-ui-react';
import LandingPageComponent from './landing-page/LandingPageComponent'
import LoginComponent from './LoginComponent'

export class DoneComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <>
                        <Sticky>
                            <HeaderComponent />
                        </Sticky>
                        <Switch>
                            <Route path='/' exact component={LandingPageComponent} />
                            <Route path='/login' component={LoginComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default DoneComponent
