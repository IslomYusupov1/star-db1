import React, {Component} from "react";
import './app.css';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import {
    PeoplePage,
    PlanetPage,
    StarshipPage,
    LoginPage,
    SecretPage
} from "../pages";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {SwapiServiceProvider} from "../swapi-service-context";
import {StarshipDetails} from "../sw-components";


export default class App extends Component {

    swapiService = new SwapiService();


    state = {
        hasError: false,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch()');
        this.setState({hasError: true});
    }

    render() {
        const {isLoggedIn} = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="starDb-app">
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                            <Route path="/" render={() => <h2>Welcome to StarDb</h2>} exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets/:id?" component={PlanetPage}/>
                            <Route path="/starships/:id?" component={StarshipPage} exact/>

                            <Route path="/login"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                        )}/>
                            <Route path="/secret"
                                    render={() => (
                                        <SecretPage isLoggedIn={isLoggedIn}/>
                                        )}/>
                                <Route render={() => <h2>Page is not found</h2>} />
                            </Switch>

                        </div>
                    </Router>

                </SwapiServiceProvider>
            </ErrorBoundry>

        )
    };
}
