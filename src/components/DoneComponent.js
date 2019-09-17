import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent'
import { Sticky } from 'semantic-ui-react';
import LandingPageComponent from './landing-page/LandingPageComponent'
import LoginComponent from './LoginComponent'
import RegisterCompnent from './RegisterCompnent';
import ListsComponent from './ListsComponent';

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
                            <Route path='/register' component={RegisterCompnent} />
                            <Route path='/app' component={ListsComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default DoneComponent
