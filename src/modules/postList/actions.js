import ACTION_TYPES from './actionTypes'

/**
 * 設定用戶發文
 * @param {array}   posts       user post list
 * @param {string}  post.userId user Id
 * @param {string}  post.Id     article Id
 * @param {string}  post.title  article title
 * @param {string}  post.body   article content
 */
export function setUserPost (posts) {
  return {
    type: ACTION_TYPES.SET_USER_POSTS,
    payload: { posts }
  }
}

export function setUser (data) {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: { data }
  }
}

export function fetchPostsAndUsers () {
  return {
    type: ACTION_TYPES.FETCH_POSTS_AND_USERS
  }
}
