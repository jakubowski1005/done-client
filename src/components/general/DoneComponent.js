import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from '../general/HeaderComponent';
import FooterComponent from '../general/FooterComponent'
import { Sticky } from 'semantic-ui-react';
import LandingPageComponent from '../landing-page/LandingPageComponent'
import LoginComponent from '../account-handling/LoginComponent'
import LogoutComponent from '../account-handling/LogoutComponent'
import RegisterComponent from '../account-handling/RegisterComponent';
import ListsComponent from '../app/ListsComponent';
import ProfileComponent from '../app/ProfileComponent'
import SettingsComponent from '../app/SettingsComponent'
import ErrorComponent from '../general/ErrorComponent'
import TermsComponent from '../general/TermsComponent'
import AuthenticatedRoute from '../account-handling/AuthenticatedRoute'
import axios from 'axios'

export class DoneComponent extends Component {
    render() {

        (function() {
     const jwt = 'Bearer ' + sessionStorage.getItem('token');
     if (jwt) {
         axios.defaults.headers.common['Authorization'] = jwt;
     } else {
         axios.defaults.headers.common['Authorization'] = null;
         /*if setting null does not remove `Authorization` header then try     
           delete axios.defaults.headers.common['Authorization'];
         */
     }
})()


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
                            <Route path='/register' component={RegisterComponent} />
                            <Route path='/logout' component={LogoutComponent} />
                            <AuthenticatedRoute path='/lists' component={ListsComponent} />
                            <AuthenticatedRoute path='/profile' component={ProfileComponent} />
                            <AuthenticatedRoute path='/settings' component={SettingsComponent} />
                            <Route path='/terms' component={TermsComponent} />
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
