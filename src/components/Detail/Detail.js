import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import Reply from '../Reply/Reply'
import './detail.css'

export default class Detail extends Component {

  state = {
    detailData: [],
    node: String,
    member: String,
    replies: [],
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
        member: res.data[0].member
      })
    })
    .catch((err) => {
      console.log(err)
    })

    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + this.props.match.params.id,
    })
    .then((res) => {
      console.log(res)
      this.setState({
        replies: res.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const data = this.state.detailData
    const node = this.state.node
    const member = this.state.member
    const replies = this.state.replies

    return (
      <div className="detail main">
        <div className="box">
          <div className="box_header">
            <div className="crumbs">
              <Link to="/">R2EX</Link><em>&nbsp;›&nbsp;</em><Link to="/">{node.title}</Link>
            </div>
            <h1 className="box_title">{data.title}</h1>
            <Link to={`/member/${member.username}`}>
              <img className="box_avatar" src={member.avatar_normal} alt="" />
            </Link>
            <div className="box_tip">
              <p>By <span>{member.username}</span> at <span>{data.created}</span>, <span>{data.replies}</span>个回复</p>
            </div>
          </div>
          <div className="content">
            <div className="content_main" dangerouslySetInnerHTML={{__html: data.content_rendered}} />
          </div>
          <div className="more">
            <span>加入收藏</span>
            <span>Tweet</span>
            <span>Weibo</span>
            <span>忽略主题</span>
            <span>感谢</span>
          </div>
        </div>
        <div className="replies">
          <div className="all_of_replies">
            <span>{data.replies}个回复</span>
            <span>直到
              {
                moment.unix(data.last_touched).format('MMMM Do YYYY, h:mm:ss a')
              }
            </span>
          </div>
          {
            replies.map((reply, index) => <Reply key={index} reply={reply} index={index} />)
          }
        </div>
      </div>
    )
  }
}
