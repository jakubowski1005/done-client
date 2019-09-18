import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from '../general/HeaderComponent';
import FooterComponent from '../general/FooterComponent'
import { Sticky } from 'semantic-ui-react';
import LandingPageComponent from '../landing-page/LandingPageComponent'
import LoginComponent from '../account-handling/LoginComponent'
import LogoutComponent from '../account-handling/LogoutComponent'
import RegisterCompnent from '../account-handling/RegisterCompnent';
import ListsComponent from '../app/ListsComponent';
import ProfileComponent from '../app/ProfileComponent'
import SettingsComponent from '../app/SettingsComponent'
import ErrorComponent from '../general/ErrorComponent'

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
                            <Route path='/logout' component={LogoutComponent} />
                            <Route path='/lists' component={ListsComponent} />
                            <Route path='/profile' component={ProfileComponent} />
                            <Route path='/settings' component={SettingsComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>
        )
    }
}

export default DoneComponent