import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class UserHeader extends Component {
  render () {
    const { username, website } = this.props
    return (
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>{`Author: ${username}`}</li>
        <li className='list-group-item'>{`Website: ${website}`}</li>
      </ul>
    )
  }
}

function selector (state, ownProps) {
  const { id } = ownProps
  const user = _.find(state.postList.users, user => user.id === id)
  return {
    username: (user && user.name) || '',
    website: (user && user.website) || ''
  }
}

export default connect(selector)(UserHeader)
