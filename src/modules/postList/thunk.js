import jsonPlaceHolder from '../../share/apis/jsonPlacerHolder'
import { setUserPost, setUser } from './actions'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchUserPosts())
  const { postList: { userPosts } } = getState()
  await _.chain(userPosts)
    .map('userId')
    .uniq().forEach(id => dispatch(fetchUser(id)))
    .value()
}

const fetchUserPosts = () => {
  return async dispatch => {
    try {
      const { data: posts } = await jsonPlaceHolder.get('./posts')
      dispatch(setUserPost(posts))
    } catch (e) {
      console.error(e)
    }
  }
}

const fetchUser = id => async dispatch => {
  try {
    const { data } = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch(setUser(data))
  } catch (e) {
    console.error(e)
  }
}
