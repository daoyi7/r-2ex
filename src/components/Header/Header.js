import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h2><Link to="/">r2ex</Link></h2>
      </header>
    )
  }
}
