import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './Header/Header'
import List from './List/List'
import Detail from './Detail/Detail';
import axios from 'axios'

export default class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/topics/latest.json',
    })
    .then((res) => {
      this.setState({
        data: res.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="r2ex">
        <Header />
        <Switch>
          <Route path = "/home" render={() => <List data = {this.state.data}/>}></Route>
          <Route path = "/detail" component = {Detail}></Route>
          <Redirect from = "/" to = "/home" />
        </Switch>

      </div>
    )
  }
}
