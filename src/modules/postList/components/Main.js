import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { fetchPostsAndUsers } from '../actions'
import Post from './Post'

class Main extends Component {
  componentDidMount () {
    this.props.fetchPostsAndUsers()
  }
  render () {
    const { posts } = this.props
    return (
      <div className='container mt-2'>
        {
          _.map(posts, (post, i) => <Post key={i} post={post} />)
        }
      </div>
    )
  }
}

function selector (state) {
  return {
    posts: state.postList.userPosts
  }
}

const actions = {
  fetchPostsAndUsers
}

export default connect(selector, actions)(Main)

Main.propTypes = {
  fetchPostsAndUsers: PropTypes.func.isRequired
}
