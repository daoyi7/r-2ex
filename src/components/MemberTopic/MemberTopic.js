import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './memberTopic.css'

export default class MemberTopic extends Component {
  render() {
    const data = this.props.memberTopic

    return (
      <div className="member_topic_box">
        <h3 className="member_content_title">{data.title}</h3>
        <div className="member_topic_info">
          <span className="member_topic_node">
            <Link to={`/node/${data.node.name}`}>{data.node.title}</Link>
          </span>
          <span className="member_topic_username">{data.member.username}</span>
          <span className="member_topic_created">{moment(moment.unix(data.created).format()).fromNow()}</span>
        </div>
        <span className="member_topic_replies">{data.replies}</span>
      </div>
    )
  }
}
