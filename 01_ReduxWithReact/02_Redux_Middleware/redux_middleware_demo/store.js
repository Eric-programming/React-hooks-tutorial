const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const { dataReducer } = require("./Reducers");
/**
 * Redux Thunk is a middleware
 * and a middleware is a extension between dispatching an action and reducer
 *
 * We can use middleware for making api calls and loggings and other tasks
 */
module.exports.store = createStore(
  dataReducer,
  applyMiddleware(thunkMiddleware)
);
