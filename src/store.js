import {applyMiddleware, createStore} from "redux";

import reducer from "./reducers";

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type);
    return dispatch(action);
};

const logMiddleware2 = ({getState}) => (dispatch) => (action) => {
    console.log(getState());
    return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(logMiddleware, logMiddleware2));

export default store;
