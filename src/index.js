import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HouseContextProvider} from './context/HouseContext';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import FindHome from './Components/FindHome/FindHome';


ReactDOM.render(
    <BrowserRouter>
        <HouseContextProvider>
            <Switch>
                <Route path="/" exact>
                    <App />
                </Route>   
                <Route path="/Find-A-Home" exact>   
                <FindHome/>
                </Route>
                <Route path="/">
                    <App />
                </Route>   
            </Switch>
        </HouseContextProvider>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();