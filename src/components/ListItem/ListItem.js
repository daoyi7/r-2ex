import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

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
            <span className="username">{list.member.username}</span>
          </div>
          <h3 className="title">
            <div>
              <Link to={`/detail/${list.id}`}>{list.title}</Link>
            </div>
          </h3>
          <div className="timebox">
            <span className="last_modified">
              {
                moment(moment.unix(list.last_modified).format()).fromNow()
              }
            </span>
          </div>
        </div>
        <span className="replies">{list.replies}</span>
      </div>
    )
  }
}
