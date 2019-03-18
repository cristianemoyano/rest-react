'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transformApiImageToImageField = exports.connectImageField = exports.addReduxFormStore = exports.addStore = exports.getMockDispatchTools = exports.configureStore = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxFormUtil = require('./reduxFormUtil');

Object.keys(_reduxFormUtil).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _reduxFormUtil[key];
        }
    });
});

var _imageField = require('./image-field');

Object.defineProperty(exports, 'connectImageField', {
    enumerable: true,
    get: function get() {
        return _imageField.connectImageField;
    }
});
Object.defineProperty(exports, 'transformApiImageToImageField', {
    enumerable: true,
    get: function get() {
        return _imageField.transformApiImageToImageField;
    }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureStore = exports.configureStore = function () {
    return process.env.NODE_ENV === 'development' && process.env.REACT_APP_TARGET === 'web' ? require('./configureStore.debug').default : require('./configureStore.main').default;
}();

/**
 * This tool offers an easy way to test dispatch functions,
 * wrapping a simple stub then adding easy access to actions
 * dispatched using the included dispatch stub.
 */
var getMockDispatchTools = exports.getMockDispatchTools = function getMockDispatchTools() {
    var dispatch = jest.fn();

    return {
        dispatch: dispatch,

        getDispatchedAction: function getDispatchedAction() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            var call = dispatch.mock.calls[index];

            if (!call) {
                throw new Error('Can\'t get action for call ' + index + ' (call doesn\'t exist)');
            }
            return call[0];
        }
    };
};

/**
 * Creates a simple store and renders the provided element
 *
 * @param {import('react').Node} element node to render
 * @param {object} reducers store reducers
 */
var addStore = exports.addStore = function addStore(element) {
    var reducers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var store = configureStore({
        reducer: (0, _redux.combineReducers)(_extends({}, reducers)),
        initialState: {}
    });

    return _react2.default.createElement(_reactRedux.Provider, { store: store, children: element });
};

/**
 * Creates a simple store and renders the provided element. Provides the necessary reducer for redux-form.
 *
 * @param {import('react').Node} element node to render
 * @param {object} reducers store reducers
 */
var addReduxFormStore = exports.addReduxFormStore = function addReduxFormStore(element) {
    var reducers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return addStore(element, _extends({ form: _reduxForm.reducer }, reducers));
};