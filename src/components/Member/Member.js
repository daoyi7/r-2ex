import React, {Component} from 'react'
import axios from 'axios'
import moment from 'moment'
import './member.css'

export default class Member extends Component {

  state = {
    memberData: [],
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
      console.log(err)
    })
  }

  render() {
    const memberData = this.state.memberData
    console.log(memberData)

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
            <div className="member_webs"></div>
          </div>
        </div>
      </div>
    )
  }
}
