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
      url: 'https://www.v2ex.com/api/topics/hot.json',
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
      <div className="home main">
        <List data = {this.state.data}/>
      </div>
    )
  }
}
