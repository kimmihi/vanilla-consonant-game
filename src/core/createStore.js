import { observable } from "./observer";

const createStore = (reducer) => {
  const state = observable(reducer());

  const dispatch = (action) => {
    const newState = reducer(state, action);
    Object.entries(newState).forEach(([key, value]) => {
      if (state[key] !== value) {
        state[key] = value;
      }
    });
  };

  const frozenState = {};
  Object.keys(state).forEach((key) => {
    Object.defineProperties(frozenState, key, {
      get: () => state[key],
    });
  });

  const getState = () => frozenState;

  return {
    dispatch,
    getState,
  };
};

export default createStore;
