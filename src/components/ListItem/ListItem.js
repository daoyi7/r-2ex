import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './list.css'

export default class ListItem extends Component {

  render() {
    const list = this.props.list

    return (
      <div className="list_item">
        <div className="member">
          <Link to={`/member/${list.member.username}`}>
            <img className="avatar" src={list.member.avatar_normal} alt="" />
          </Link>
        </div>
        <div className="list">
          <div className="node">
            <span className="nodename">
              <Link to={`/node/${list.node.name}`}>{list.node.title}</Link>
            </span>
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
