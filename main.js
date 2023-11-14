import store from "./store/store.js";
import { add, sub } from "./store/actions.js";

store.subscribe(function () {
  console.log("state changed", store.getState());
});

console.log(store.getState());

store.dispatch(add());
store.dispatch(add());
store.dispatch(add());
store.dispatch(sub());
store.dispatch(add());
store.dispatch(sub());
store.dispatch(add());
