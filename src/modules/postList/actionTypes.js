import { keyMirror } from '../../utils'

const ActionTypesList = [
  'FETCH_POSTS_AND_USERS',
  // 取得用戶發文
  'FETCH_ USER_POSTS',
  // 設定用戶發文
  'SET_USER_POSTS',
  // 設定用戶資料
  'SET_USER'
]

const ACTION_TYPES = keyMirror(ActionTypesList)

export default ACTION_TYPES
