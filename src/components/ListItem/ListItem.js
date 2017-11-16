import React, {Component} from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import moment from 'moment'
import Detail from '../Detail/Detail'

export default class ListItem extends Component {

  render() {
    const list = this.props.list

    return (
      <BrowserRouter basename="/">
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
              <Link to="/detail">{list.title}</Link>
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
      </BrowserRouter>
    )
  }
}
