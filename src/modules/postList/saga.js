import { call, put, select, takeEvery, all } from 'redux-saga/effects'
import jsonPlaceHolder from '../../share/apis/jsonPlacerHolder'
import * as actions from './actions'
import ACTION_TYPES from './actionTypes'
import _ from 'lodash'

export default function * rootSaga () {
  yield takeEvery(ACTION_TYPES.FETCH_POSTS_AND_USERS, fetchPostsAndUsers)
}

function * fetchPostsAndUsers () {
  try {
    const posts = yield call(fetchUserPosts)
    yield put(actions.setUserPost(posts))
    const userPosts = yield select(state => state.postList.userPosts)
    const userIds = _.chain(userPosts).map('userId').uniq().value()
    yield all(userIds.map(id => call(fetchUser, id)))
  } catch (e) {
    console.error(e)
  }
}

function * fetchUserPosts () {
  try {
    const { data: posts } = yield call(jsonPlaceHolder.get, './posts')
    return posts
  } catch (e) {
    console.error(e)
    throw e
  }
}

function * fetchUser (id) {
  try {
    const { data } = yield call(jsonPlaceHolder.get, `./users/${id}`)
    yield put(actions.setUser(data))
  } catch (e) {
    console.error(e)
    throw e
  }
}
