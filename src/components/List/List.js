import React, {Component} from 'react'
import ListItem from '../ListItem/ListItem'

export default class List extends Component {

  render() {
    const lists = this.props.data
    console.log(lists)
    return (
      <div className="listWrap main">
        {lists.map((list, index) => <ListItem list={list} key={index}/>)}
      </div>
    )
  }
}
