import React, {Component} from 'react'
import List from '../List/List'
import axios from 'axios'

export default class Hpme extends Component {

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
      console.error(err)
    })
  }

  render() {
    return (
      <div className="home main">
        <List data = {this.state.data}/>
      </div>
    )
  }
}
