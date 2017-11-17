import React, {Component} from 'react'
import moment from 'moment'
import './reply.css';

export default class Reply extends Component {

  render() {
    const reply = this.props.reply
    console.log(reply)

    return (
      <div className="reply_item">
        <div className="reply_member">
          <img className="reply_avatar" src={reply.member.avatar_mini} alt="" />
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
