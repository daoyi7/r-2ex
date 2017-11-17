import React, {Component} from 'react'
import axios from 'axios'
import moment from 'moment'
import MemberTopic from '../MemberTopic/MemberTopic'
import './member.css'

export default class Member extends Component {

  state = {
    memberData: [],
    memberTopic: [],
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/members/show.json?username=' + this.props.match.params.username,
    })
    .then((res) => {
      this.setState({
        memberData: res.data
      })
    })
    .catch((err) => {
      console.error(err)
    })

    axios({
      method: 'get',
      url: 'https://www.v2ex.com/api/topics/show.json?username=' + this.props.match.params.username,
    })
    .then((res) => {
      this.setState({
        memberTopic: res.data
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  render() {
    const memberData = this.state.memberData
    const memberTopic = this.state.memberTopic

    return (
      <div className="member_info main">
        <div className="all_of_member_info">
          <div className="member_info_box">
            <div className="member_avatar_box">
              <img className="info_avatar" src={memberData.avatar_normal} alt="" />
            </div>
            <div className="member_info_data">
              <h1 className="member_username">{memberData.username}</h1>
              <div className="member_created">
                <p>
                  R2EX第{memberData.id}号会员，加入于{moment.unix(memberData.created).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
              </div>
            </div>
          </div>
          {
            memberData.website && memberData.github && memberData.location
            ?

            <div className="member_webs">
              {
                memberData.website
                ?
                <span className="website">
                  <i className="icon iconfont icon-website" style={{color: '#39ca38'}}></i>
                  <b>{memberData.website}</b>
                </span>
                : null
              }
              {
                memberData.github
                ?
                <span className="github">
                  <i className="icon iconfont icon-github"></i>
                  <b>{memberData.github}</b>
                </span>
                : null
              }
              {
                memberData.location
                ?
                <span className="location">
                  <i className="icon iconfont icon-location"></i>
                  <b>{memberData.location}</b>
                </span>
                : null
              }
            </div>
            : null
          }
          <div className="member_motto">
            {
              memberData.tagline
              ? <p className="tagline">{memberData.tagline}</p>
              : null
            }
            {
              memberData.bio
              ? <p className="bio">{memberData.bio}</p>
              : null
            }
          </div>
        </div>
        <div className="member_topic_main">
          <div className="member_topic_title">
            <img className="member_topic_avatar" src={memberData.avatar_normal} alt="" />
            <span>{memberData.username}创建的所有主题</span>
          </div>
          <div className="member_topic">
            {
              memberTopic.map((topic, index) => <MemberTopic key={index} memberTopic={topic} />)
            }
          </div>
        </div>
      </div>
    )
  }
}
