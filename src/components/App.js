import React, {
  Component
} from 'react'
import Header from './Header/Header'
import List from './List/List'
// import axios from 'axios'

export default class App extends Component {

  state = {
    data: true
  }

  componentDidMount() {

    fetch('/topics/hot.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log(json)
    })
    .catch(function(ex) {
      console.log(ex)
    })
  }

  render() {
    return (
      <div className = "r2ex" >
        <Header />
        <List />
      </div>
    )
  }
}
