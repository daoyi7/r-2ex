import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ListItem from '../ListItem/ListItem'
import './node.css'

export default class Node extends Component {

  state = {
    nodeData: [],
    nodeInfo: []
  }

  componentDidMount() {
    const nodename = this.props.match.params.nodename

    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/topics/show.json?node_name=' + nodename,
    })
    .then((res) => {
      this.setState({
        nodeData: res.data,
      })
    })
    .catch((err) => {
      console.error(err)
    })

    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/nodes/show.json?name=' + nodename,
    })
    .then((res) => {
      this.setState({
        nodeInfo: res.data,
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    const nodeData = this.state.nodeData
    const nodeInfo = this.state.nodeInfo
    console.log(nodeInfo)

    return (
      <div className="node_list main">
        <div className="listWrap">
          <div className="node_list_head">
            <div className="crumbs">
              <Link to="/">R2EX</Link>
              <em>&nbsp;›&nbsp;</em>
              <Link to={`/node/${nodeInfo.name}`}>{nodeInfo.title}</Link>
            </div>
          </div>
          {nodeData.map((list, index) => <ListItem list={list} key={index}/>)}
        </div>
      </div>
    )
  }
}
