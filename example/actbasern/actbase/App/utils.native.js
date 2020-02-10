"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styleIndexer = exports.TEXT_STYLE_NAMES = exports.measure = exports.ABContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ABContext = (0, _react.createContext)({});
exports.ABContext = ABContext;

var measure = function measure(target) {
  return new Promise(function (resolve, reject) {
    try {
      _reactNative.UIManager.measure(target, function (originX, originY, width, oHeight, pageX, pageY) {
        return resolve({
          originX: originX,
          originY: originY,
          width: width,
          height: oHeight,
          pageX: pageX,
          pageY: pageY
        });
      });
    } catch (e) {
      reject(e);
    }
  });
};

exports.measure = measure;
var TEXT_STYLE_NAMES = ['color', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'fontVariant', 'textShadowOffset', 'textShadowRadius', 'textShadowColor', 'letterSpacing', 'lineHeight', 'textAlign', 'textAlignVertical', 'includeFontPadding', 'textDecorationLine', 'textDecorationStyle', 'textDecorationColor', 'textTransform', 'writingDirection'];
exports.TEXT_STYLE_NAMES = TEXT_STYLE_NAMES;
var styleIndexer = {
  'ab-button': 'button'
};
exports.styleIndexer = styleIndexer;
var _default = {
  ABContext: ABContext,
  TEXT_STYLE_NAMES: TEXT_STYLE_NAMES,
  styleIndexer: styleIndexer,
  measure: measure
};
exports["default"] = _default;