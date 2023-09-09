import { createStore, applyMiddleware } from 'redux'; // Import createStore and applyMiddleware
import { combineReducers } from 'redux'; // No need to import combineReducers from redux again
import { todoReducer } from '../features/todoSlice';
import { composeWithDevTools } from 'redux-devtools-extension'; // Import the correct devtools extension
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)) // Pass applyMiddleware and middleware properly
);

export default store; // Export the store as the default export
