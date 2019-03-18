'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectImageField = exports.mapDispatchToProps = exports.mapStateToProps = exports.makeCropMaskFromValues = exports.transformApiImageToImageField = undefined;

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _reduxFormUtil = require('./reduxFormUtil');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getCropMaskCoords = function getCropMaskCoords(cropMask) {
    var cropMaskCoords = cropMask['top_left'] || {};
    var x = cropMaskCoords.x || cropMaskCoords.x === 0 ? cropMaskCoords.x : '';
    var y = cropMaskCoords.y || cropMaskCoords.y === 0 ? cropMaskCoords.y : '';

    return { x: x, y: y };
};

/**
 * Retrieves relevant information from API image object
 * @param {string} fieldName Name of the field
 * @param {object} [apiImage] Image object info returned by the API
 * @returns {object} Object containing image information
 */
var transformApiImageToImageField = exports.transformApiImageToImageField = function transformApiImageToImageField(fieldName) {
    var _ref;

    var apiImage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Note that `crop_mask` or `original` may be null in the JSON, so need to account for that.
    var originalInfo = apiImage.original || {};
    var cropMask = apiImage['crop_mask'] || {};

    var _getCropMaskCoords = getCropMaskCoords(cropMask),
        x = _getCropMaskCoords.x,
        y = _getCropMaskCoords.y;

    return _ref = {}, _defineProperty(_ref, fieldName, apiImage.id || ''), _defineProperty(_ref, fieldName + 'Url', apiImage.url || ''), _defineProperty(_ref, fieldName + 'OriginalUrl', originalInfo.url || ''), _defineProperty(_ref, fieldName + 'CropX', x), _defineProperty(_ref, fieldName + 'CropY', y), _defineProperty(_ref, fieldName + 'CropWidth', cropMask.width || ''), _defineProperty(_ref, fieldName + 'CropHeight', cropMask.height || ''), _ref;
};

// exported for testing
var makeCropMaskFromValues = exports.makeCropMaskFromValues = function makeCropMaskFromValues(x, y, width, height) {
    if ((x || x === 0) && (y || y === 0) && width && height) {
        return { x: x, y: y, width: width, height: height };
    }

    return null;
};

// exported for testing
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, fieldName, getFieldValue) {
    return {
        name: fieldName,
        imageId: getFieldValue(state, fieldName),
        originalUrl: getFieldValue(state, fieldName + 'OriginalUrl'),

        cropMask: makeCropMaskFromValues(getFieldValue(state, fieldName + 'CropX'), getFieldValue(state, fieldName + 'CropY'), getFieldValue(state, fieldName + 'CropWidth'), getFieldValue(state, fieldName + 'CropHeight'))
    };
};

// exported for testing
var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch, formName, fieldName) {
    return {
        updateFieldsFromObject: function updateFieldsFromObject(apiImage) {
            (0, _reduxFormUtil.multiChangeFormFields)(dispatch, formName, transformApiImageToImageField(fieldName, apiImage));
        }
    };
};

/**
 * Connects an EDS ImageField component to redux-form state
 * @param {ReactComponent} ImageFieldComponent Reference to EDS ImageField component
 * @param {string} formName Name of the form
 * @param {string} fieldName Form field name
 * @returns {ReactComponent} Connected ImageField component
 */
var connectImageField = exports.connectImageField = function connectImageField(ImageFieldComponent, formName, fieldName) {
    var getFieldValue = (0, _reduxForm.formValueSelector)(formName);

    return (0, _reactRedux.connect)(function (state) {
        return mapStateToProps(state, fieldName, getFieldValue);
    }, function (dispatch) {
        return mapDispatchToProps(dispatch, formName, fieldName);
    })(ImageFieldComponent);
};