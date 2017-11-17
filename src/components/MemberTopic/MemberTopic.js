import React, {Component} from 'react'
import moment from 'moment'
import './memberTopic.css'

export default class MemberTopic extends Component {
  render() {
    const data = this.props.memberTopic
    console.log(data);

    return (
      <div className="member_topic_box">
        <h3 className="member_topic_title">{data.title}</h3>
        <div className="member_topic_info">
          <span className="member_topic_node">{data.node.title}</span>
          <span className="member_topic_username">{data.member.username}</span>
          <span className="member_topic_created">{moment(moment.unix(data.created).format()).fromNow()}</span>
        </div>
        <span className="member_topic_replies">{data.replies}</span>
      </div>
    )
  }
}
