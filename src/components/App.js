import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import Detail from './Detail/Detail'

export default class App extends Component {

  render() {
    return (
      <div className="r2ex">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path = "/home" component={Home}></Route>
            <Route exact path = "/detail/:id" component={Detail}></Route>
            <Redirect from = "/" to = "/home" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
