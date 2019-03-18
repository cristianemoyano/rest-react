'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var configureStore = function configureStore(_ref) {
    var reducer = _ref.reducer,
        initialState = _ref.initialState,
        _ref$middleware = _ref.middleware,
        middleware = _ref$middleware === undefined ? [_reduxThunk2.default] : _ref$middleware;
    return (0, _redux.createStore)(reducer, initialState, _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware)));
};

exports.default = configureStore;