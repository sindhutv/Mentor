// src/redux/store.js
import { legacy_createStore as createStore, combineReducers } from 'redux';

// Define initial state
const initialState = {
  // Your initial state goes here
};

// Define reducers
const rootReducer = combineReducers({
  // Add your reducers here
});

// Create the Redux store
const store = createStore(rootReducer, initialState);

export default store;
