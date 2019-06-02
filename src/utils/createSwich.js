export default function createSwitch (actionToReducerMap) {
  return function switchAction (state, action = {}) {
    const reducer = actionToReducerMap[action.type]

    return reducer
      ? reducer(state, action)
      : state
  }
}
