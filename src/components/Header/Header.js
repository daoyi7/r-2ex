import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import './header.css';

export default class Header extends Component {

  goHome = this.goHome.bind(this)

  goHome() {
    BrowserRouter.push('/')
  }

  render() {
    return (
      <header className="header">
        <h2 onClick={this.goHome}>r2ex</h2>
      </header>
    )
  }
}
