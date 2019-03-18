'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomSubmissionError = exports.shouldDisplayError = exports.multiChangeFormFields = exports.fieldsArrayMoveIndex = exports.NOTIFICATION_DELAY = undefined;

var _lodash = require('lodash');

var _reduxForm = require('redux-form');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Redux form is great!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     ...but it's got a few bugs and here are our tools to work around them until they get fixed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NOTIFICATION_DELAY = exports.NOTIFICATION_DELAY = 7000;

/**
 * Redux form `fields` pseudo-array offers a `.move(index, newIndex)` function but it is currently broken
 * ( see https://github.com/erikras/redux-form/issues/1386 )
 *
 * This is a band-aid function to accomplish the same effect, albeit inefficiently, until redux-form is updated.
 *
 * @param fields
 * @param oldIndex
 * @param newIndex
 */
var fieldsArrayMoveIndex = exports.fieldsArrayMoveIndex = function fieldsArrayMoveIndex(fields, oldIndex, newIndex) {
    var direction = newIndex > oldIndex ? 1 : -1;
    var targetIndex = newIndex > oldIndex ? newIndex - 1 : newIndex;
    var current = oldIndex;

    while (current !== targetIndex) {
        fields.swap(current, current + direction);
        current += direction;
    }
};

/**
 * Redux form does not currently have an action and reducer for changing multiple
 * fields at once. Long-term it would be good to add this either to redux-form
 * or as an action + plugin set, but the change logic is complicated enough and
 * currently in enough flux that my solution here is to just dispatch individual
 * change actions for each field in values.
 *
 * @param dispatch func
 * @param form string
 * @param values object
 * @param args
 */
var multiChangeFormFields = exports.multiChangeFormFields = function multiChangeFormFields(dispatch, form, values) {
    for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
    }

    (0, _lodash.forEach)(values, function (value, field) {
        return dispatch(_reduxForm.change.apply(undefined, [form, field, value].concat(args)));
    });
};

// ValidationFormField's default shouldDisplayError triggers every time a field is dirtied,
// which means an error displays the moment a user starts typing. We only want errors
// to start/continue showing after the user has hit submit.
//
// To do this we override shouldDisplayError to check if the field is touched instead of dirtied,
// and set touchOnBlur on our form to false. When the form is submitted, redux-form marks
// all fields as touched, which triggers error display.
//
// See: https://github.com/erikras/redux-form/issues/733#issuecomment-195935723
var shouldDisplayError = exports.shouldDisplayError = function shouldDisplayError(_ref) {
    var error = _ref.error,
        submitFailed = _ref.submitFailed,
        touched = _ref.touched;
    return !!error && (submitFailed || touched);
};

/**
 * Custom subclass of SubmissionError which allow us to pass extra information
 */

var CustomSubmissionError = exports.CustomSubmissionError = function (_SubmissionError) {
    _inherits(CustomSubmissionError, _SubmissionError);

    function CustomSubmissionError(errors, extraData) {
        _classCallCheck(this, CustomSubmissionError);

        var _this = _possibleConstructorReturn(this, (CustomSubmissionError.__proto__ || Object.getPrototypeOf(CustomSubmissionError)).call(this, errors));

        _this.extraData = extraData;
        return _this;
    }

    return CustomSubmissionError;
}(_reduxForm.SubmissionError);