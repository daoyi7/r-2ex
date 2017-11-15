import React, {Component} from 'react'
// import moment from 'moment'

export default class ListItem extends Component {
  render() {
    const list = this.props.list

    return (
      <div className="listItems">
        <div className="member">
          <img className="avatar" src={list.member.avatar_normal} alt="" />
        </div>
        <div className="list">
          <div className="node">
            <span className="nodename">{list.node.title}</span>
            <span className="split">·</span>
            <span className="username">{list.member.username}</span>
          </div>
          <h2 className="title">{list.title}</h2>
        </div>
      </div>
    )
  }
}
