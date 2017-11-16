import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './components/static/css/reset.css';
import './components/static/css/app.css';
import App from './components/App';
import Detail from './components/Detail/Detail';
import registerServiceWorker from './registerServiceWorker';

const rr = (
  <BrowserRouter>
    <Switch>
      <Route path = "/home" component = {App}></Route>
      <Route path = "/detail" component = {Detail}></Route>
      <Redirect from = "/" to = "/home" />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(rr, document.getElementById('root'));
registerServiceWorker();
