import * as actions from "./actionTypes.js";

export default function reducer(state = 0, action) {
  if (action.type === actions.ADD) {
    return state + 1;
  } else if (action.type === actions.SUB) {
    return state - 1;
  }
  return state;
}
