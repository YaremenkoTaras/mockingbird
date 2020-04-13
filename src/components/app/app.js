import React from "react";
import './app.css';
import {withDataService} from '../hoc';
import {Route, Switch} from 'react-router-dom';
import {CartPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = ({dataService}) => {
    return (
        <main role='main' className="container ">
            <ShopHeader itemsNum={5} total={210}/>
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
        </main>
    );
};

export default withDataService()(App);
