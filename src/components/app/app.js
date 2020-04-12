import React from "react";
import './app.css';
import {withDataService} from '../hoc';

const App = ({dataService}) => {
    console.log(dataService.getBooks());
    return <div>App</div>
};

export default withDataService()(App);
