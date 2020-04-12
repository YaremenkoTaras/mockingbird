import React from "react";
import List from "../list";
import {DataService} from "../../services";

const dataService = new DataService(); // todo remove


const HomePage = () => {
    const testData = dataService.getMovies();// todo remove
    return (
        <List itemList={testData}/>
    );
};

export default HomePage;

