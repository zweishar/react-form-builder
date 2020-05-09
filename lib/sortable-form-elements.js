"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sortableElement = _interopRequireDefault(require("./sortable-element"));

var _formPlaceHolder = _interopRequireDefault(require("./form-place-holder"));

var _formElements = _interopRequireDefault(require("./form-elements"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _formElements["default"].Header,
    Paragraph = _formElements["default"].Paragraph,
    Label = _formElements["default"].Label,
    LineBreak = _formElements["default"].LineBreak,
    TextInput = _formElements["default"].TextInput,
    NumberInput = _formElements["default"].NumberInput,
    TextArea = _formElements["default"].TextArea,
    Dropdown = _formElements["default"].Dropdown,
    Checkboxes = _formElements["default"].Checkboxes,
    DatePicker = _formElements["default"].DatePicker,
    RadioButtons = _formElements["default"].RadioButtons,
    Image = _formElements["default"].Image,
    Rating = _formElements["default"].Rating,
    Tags = _formElements["default"].Tags,
    Signature = _formElements["default"].Signature,
    HyperLink = _formElements["default"].HyperLink,
    Download = _formElements["default"].Download,
    Camera = _formElements["default"].Camera,
    Range = _formElements["default"].Range;
var FormElements = {};
FormElements.Header = (0, _sortableElement["default"])(Header);
FormElements.Paragraph = (0, _sortableElement["default"])(Paragraph);
FormElements.Label = (0, _sortableElement["default"])(Label);
FormElements.LineBreak = (0, _sortableElement["default"])(LineBreak);
FormElements.TextInput = (0, _sortableElement["default"])(TextInput);
FormElements.NumberInput = (0, _sortableElement["default"])(NumberInput);
FormElements.TextArea = (0, _sortableElement["default"])(TextArea);
FormElements.Dropdown = (0, _sortableElement["default"])(Dropdown);
FormElements.Signature = (0, _sortableElement["default"])(Signature);
FormElements.Checkboxes = (0, _sortableElement["default"])(Checkboxes);
FormElements.DatePicker = (0, _sortableElement["default"])(DatePicker);
FormElements.RadioButtons = (0, _sortableElement["default"])(RadioButtons);
FormElements.Image = (0, _sortableElement["default"])(Image);
FormElements.Rating = (0, _sortableElement["default"])(Rating);
FormElements.Tags = (0, _sortableElement["default"])(Tags);
FormElements.HyperLink = (0, _sortableElement["default"])(HyperLink);
FormElements.Download = (0, _sortableElement["default"])(Download);
FormElements.Camera = (0, _sortableElement["default"])(Camera);
FormElements.Range = (0, _sortableElement["default"])(Range);
FormElements.PlaceHolder = (0, _sortableElement["default"])(_formPlaceHolder["default"]);
var _default = FormElements;
exports["default"] = _default;