import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore, compose,applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import thunk from 'redux-thunk'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )

);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));







