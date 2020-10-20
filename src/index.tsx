import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import {configureStore} from "@reduxjs/toolkit";


const store = configureStore({
    reducer: rootReducer
})

const app = (
    <Provider store={store}>
        <App/>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root'));







