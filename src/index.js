import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}   from 'react-redux';
import Main from './components/Layout/Main';
import Routes from './route'
import { BrowserRouter} from 'react-router-dom';
import Store from './redux/store/index';

ReactDOM.render(
    // Routes
    //增加了redux,想使用store,就要借助好基友Provider
    <Provider store = {Store}>
        {Routes}
    </Provider>
    , 
    document.getElementById('app')
);