import React, { Component } from 'react'
import UserHeader from './UserHeader'

class Post extends Component {
  render () {
    const { title, body, userId } = this.props.post
    return (
      <div className='card mt-2'>
        <div className='card-body'>
          <h5 className='card-title'>{`Title: ${title}`}</h5>
          <p className='card-text'>{`Short Read: ${body}`}</p>
        </div>
        <UserHeader id={userId} />
      </div>
    )
  }
}

export default Post
