import { createStore } from "redux";

function counterReducer(state = { value: {} }, action) {
  switch (action.type) {
    case "user_save":
      return { value: action.payload };
    case "user_delete":
      return { value: {} };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented" });
// {value: 1}
store.dispatch({ type: "counter/incremented" });
// {value: 2}
store.dispatch({ type: "counter/decremented" });
// {value: 1}
