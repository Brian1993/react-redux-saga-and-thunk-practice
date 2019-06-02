import * as moduleConfig from './config'
import reducer from './reducer'
import Main from './components/Main'

export const MODULE_NAME = moduleConfig.MODULE_NAME

export const postList = reducer

export const PostList = Main
