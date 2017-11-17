import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './reply.css'

export default class Reply extends Component {

  render() {
    const reply = this.props.reply

    return (
      <div className="reply_item">
        <div className="reply_member">
          <Link to={`/member/${reply.member.username}`}>
            <img className="reply_avatar" src={reply.member.avatar_mini} alt="" />
          </Link>
        </div>
        <div className="reply_all">
          <div className="reply_title">
            <span className="reply_username">{reply.member.username}</span>
            <span className="reply_created">
              {
                moment(moment.unix(reply.last_modified).format()).fromNow()
              }
            </span>
          </div>
          <div className="reply_content" dangerouslySetInnerHTML={{__html: reply.content_rendered}} />
        </div>
        <span className="reply_index">{this.props.index + 1}</span>
      </div>
    )
  }
}
