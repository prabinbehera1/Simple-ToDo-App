import { createStore } from 'redux';
import tasksReducer from './reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const persistedState = loadState();

const store = createStore(
  tasksReducer,
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
