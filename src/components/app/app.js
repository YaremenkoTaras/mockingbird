import React from "react";
import './app.css';
import {withDataService} from '../hoc';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from "../pages";

const App = ({dataService}) => {
    return (
        <Switch>
            <Route
                path='/cart'
                component={CartPage}
                exact
            />

            <Route
                path='/'
                component={HomePage}
                exact
            />

        </Switch>
    );
};

export default withDataService()(App);
