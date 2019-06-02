import { createSwitch } from '../../utils'
import ACTION_TYPES from './actionTypes'

const intialState = {
  userPosts: [],
  users: []
}

const swithAction = createSwitch({
  [ACTION_TYPES.SET_USER_POSTS]: setUserPost,
  [ACTION_TYPES.SET_USER]: setUser
})

function setUserPost (state, { payload }) {
  const { posts } = payload
  return { ...state, userPosts: [ ...state.userPosts, ...posts ] }
}

function setUser (state, { payload }) {
  const { data } = payload
  return { ...state, users: [ ...state.users, data ] }
}
const modules01Reducer = (state = intialState, action) => {
  return swithAction(state, action)
}

export default modules01Reducer
