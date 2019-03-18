'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxLogger = require('redux-logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * @typedef {object} StoreOptions
 * @property {import('redux').Reducer<{}>} reducer Reducer to use
 * @property {object} initialState Initial state
 * @property {import('redux').Middleware[]} middleware Array of middleware
 */

/**
 * Create's a redux store
 * @param {StoreOptions} options
 */
var configureStore = function configureStore(_ref) {
    var reducer = _ref.reducer,
        initialState = _ref.initialState,
        _ref$middleware = _ref.middleware,
        middleware = _ref$middleware === undefined ? [_reduxThunk2.default] : _ref$middleware;
    return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware).concat([(0, _reduxLogger.createLogger)({ collapsed: true })]))));
};

exports.default = configureStore;