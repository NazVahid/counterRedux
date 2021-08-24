import { createStore } from "redux";
import { counterReducer } from './../reducers/counter';
import { reducers } from './../reducers';

//store
export const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//dispatch
store.subscribe(() => console.log(store.getState()));