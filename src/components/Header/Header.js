import React, {Component} from 'react'
import './header.css'

export default class Header extends Component {

  goHome = this.goHome.bind(this)

  goHome() {
    window.location.href='/'
  }

  render() {
    return (
      <header className="header">
        <h2 onClick={this.goHome}>r2ex</h2>
      </header>
    )
  }
}
