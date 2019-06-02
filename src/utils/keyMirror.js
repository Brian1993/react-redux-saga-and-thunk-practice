import _ from 'lodash'

export default function keyMirror (actionTypes) {
  const actionsObjList = _.map(actionTypes, actionType => ({ [actionType]: actionType }))
  return _.assign(...actionsObjList)
}
