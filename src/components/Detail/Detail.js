import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../static/css/detail.css';

export default class Detail extends Component {

  state = {
    detailData: Object,
    node: String,
    avatar: String
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + this.props.match.params.id,
    })
    .then((res) => {
      console.log(res)
      this.setState({
        detailData: res.data[0],
        node: res.data[0].node,
        avatar: res.data[0].member
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const data = this.state.detailData
    const node = this.state.node
    const avatar = this.state.avatar

    return (
      <div className="detail main">
        <div className="box">
          <div className="box_header">
            <div className="crumbs">
              <Link to="/">R2EX</Link><em style = {{margin:'0 .5em'}}>></em><Link to="/">{node.title}</Link>
              <h2>{data.title}</h2>
              <img src={avatar.avatar_normal} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
