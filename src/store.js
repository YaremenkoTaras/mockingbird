import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type);
    return dispatch(action);
};

const logStateMiddleware = ({getState}) => (dispatch) => (action) => {
    console.log(getState());
    return dispatch(action);
};

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action});
    }
    return dispatch(action);
};

const store = createStore(reducer,
    applyMiddleware(
        thunkMiddleware,
        stringMiddleware,
        logMiddleware,
        logStateMiddleware,));

// const thunkAction = (dispatch) => {
//     setTimeout(() => dispatch('THUNK_ACTION'), 5000)
//
// };
//
// const thunkDelayedActionCreator = (timeout) => (dispatch) => {
//     setTimeout(() => dispatch('DELAYED_THUNK_ACTION'), timeout)
// };
//
// store.dispatch(thunkAction);
// store.dispatch(thunkDelayedActionCreator(1000));

export default store;
