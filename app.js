import React from 'react';
import ReactDOM from 'react-dom';
import DemoBar from './demobar';
import FormBuilder from './src/index';
import * as variables from './variables';
// import { get, post} from './src/stores/requests';
// Add our stylesheets for the demo.
require('./scss/application.scss');

const url = '/api/formdata';
const saveUrl = '/api/formdata';

// const content = [
//   {
//     id: '3A06600E-D7E1-44FD-AA0C-BFB8AB61B9F1',
//     element: 'Dropdown',
//     text: 'Dropdown',
//     required: false,
//     canHaveAnswer: true,
//     field_name: 'dropdown_38716F53-51AA-4A53-9A9B-367603D82548',
//     label: '<div>Dropdown</div>\n',
//     options: [
//       {
//         value: 'd1',
//         text: '1',
//         key: 'dropdown_option_39F17D90-322B-4E23-8CD6-4D7AD58C4DD0',
//       },
//       {
//         value: 'd2',
//         text: '2',
//         key: 'dropdown_option_C3BB35B7-6335-4704-BD03-1228D7C33EAE',
//       },
//       {
//         value: 'd3',
//         text: '3',
//         key: 'dropdown_option_31C5C3A9-59B3-4CD5-B997-3754C6B05353',
//       },
//     ],
//   },
//   {
//     id: '7C8F465D-C09C-42CF-8563-EEF26635382F',
//     element: 'Checkboxes',
//     text: 'Checkboxes',
//     required: false,
//     canHaveAnswer: true,
//     field_name: 'checkboxes_8D6BDC45-76A3-4157-9D62-94B6B24BB833',
//     label: '<div>check box</div>\n',
//     options: [
//       {
//         value: 'c1',
//         text: '1',
//         key: 'checkboxes_option_8657F4A6-AA5A-41E2-A44A-3E4F43BFC4A6',
//       },
//       {
//         value: 'c2',
//         text: '2',
//         key: 'checkboxes_option_1D674F07-9E9F-4143-9D9C-D002B29BA9E4',
//       },
//       {
//         value: 'c3',
//         text: '3',
//         key: 'checkboxes_option_6D097591-E445-4BB4-8474-03BFDAA06BFC',
//       },
//     ],
//   },
//   {
//     id: '850B1CE9-E8D8-47CA-A770-25496EECC000',
//     element: 'RadioButtons',
//     text: 'Multiple Choice',
//     required: false,
//     canHaveAnswer: true,
//     field_name: 'radio_buttons_F79ACC6B-7EBA-429E-870C-124F4F0DA90B',
//     label: '<div>radio</div>\n',
//     options: [
//       {
//         value: 'r1',
//         text: '1',
//         key: 'radiobuttons_option_D3277CC8-FDB2-4CEB-AE83-C126492062B6',
//       },
//       {
//         value: 'r2',
//         text: '2',
//         key: 'radiobuttons_option_553B2710-AD7C-46B4-9F47-B2BD5942E0C7',
//       },
//       {
//         value: 'r3',
//         text: '3',
//         key: 'radiobuttons_option_08175D04-FF32-4FFB-9210-630AA155573E',
//       },
//     ],
//   },
//   {
//     id: '34611241-27CF-4D0A-9B8D-6F84024D6876',
//     element: 'Rating',
//     text: 'Rating',
//     required: false,
//     canHaveAnswer: true,
//     field_name: 'rating_3B3491B3-71AC-4A68-AB8C-A2B5009346CB',
//     label: '<div>star</div>\n',
//   },
// ];

// const onLoad = function() {
//   console.log('onLoad');
//   return get(url);
// }

// const onPost = function(data) {
//   console.log('onPost', data);
//   post(saveUrl, data);
// }

// const items = [
//   {
//     key: 'TextInput',
//     canHaveAnswer: true,
//     canHaveAlternateForm: false,
//     name: 'Text Input',
//     label: 'Placeholder Label',
//     icon: 'fas fa-font',
//     field_name: 'text_input_',
//   },
//   {
//     key: 'Dropdown',
//     canHaveAnswer: true,
//     name: 'Dropdown',
//     icon: 'fa fa-caret-square-o-down',
//     label: 'Placeholder Label',
//     field_name: 'dropdown_',
//     options: [],
//   },
//   {
//     key: 'RadioButtons',
//     canHaveOptionValue: false,
//     name: 'Multiple Choice',
//     icon: 'fas fa-dot-circle',
//     label: 'Placeholder Label',
//     field_name: 'radiobuttons_',
//     options: [],
//   },
// ];

const items = [{
  key: 'Header',
  name: 'Header Text',
  icon: 'fas fa-heading',
  static: true,
  content: 'Placeholder Text...',
  canHavePageBreakBefore: false,
  canHaveAlternateForm: false,
  static: false,
},
{
  key: 'Paragraph',
  name: 'Paragraph',
  static: true,
  icon: 'fas fa-paragraph',
  content: 'Placeholder Text...',
  canHavePageBreakBefore: false,
  canHaveAlternateForm: false,
  static: false,
},
{
  key: 'LineBreak',
  name: 'Line Break',
  static: true,
  icon: 'fas fa-arrows-alt-h',
},
{
  key: 'Dropdown',
  canHaveAnswer: true,
  name: 'Dropdown',
  icon: 'far fa-caret-square-down',
  label: 'Placeholder Label',
  field_name: 'dropdown_',
  options: [],
  canHavePageBreakBefore: false,
  canHaveAlternateForm: false,
  canHaveOptionCorrect: false,
  canHaveOptionValue: false,
  canPopulateFromApi: false,
},
{
    key: 'Checkboxes',
    canHaveAnswer: true,
    name: 'Checkboxes',
    icon: 'far fa-check-square',
    label: 'Placeholder Label',
    field_name: 'checkboxes_',
    options: [],
    canHavePageBreakBefore: false,
    canHaveAlternateForm: false,
    canHaveOptionCorrect: false,
    canHaveOptionValue: false,
    canHaveDisplayHorizontal: false,
    canPopulateFromApi: false,
},
{
    key: 'RadioButtons',
    canHaveAnswer: true,
    name: 'Multiple Choice',
    icon: 'far fa-dot-circle',
    label: 'Placeholder Label',
    field_name: 'radiobuttons_',
    options: [],
    canHavePageBreakBefore: false,
    canHaveAlternateForm: false,
    canHaveDisplayHorizontal: false,
    canHaveOptionCorrect: false,
    canHaveOptionValue: false,
},
{
    key: 'TextInput',
    canHaveAnswer: true,
    name: 'Text Input',
    label: 'Placeholder Label',
    icon: 'fas fa-font',
    field_name: 'text_input_',
    canHavePageBreakBefore: false,
    canHaveAlternateForm: false,
},
{
    key: 'NumberInput',
    canHaveAnswer: true,
    name: 'Number Input',
    label: 'Placeholder Label',
    icon: 'fas fa-plus',
    field_name: 'number_input_',
    canHaveAlternateForm: false,
    canHavePageBreakBefore: false,
},
{
    key: 'Rating',
    canHaveAnswer: true,
    name: 'Rating',
    label: 'Placeholder Label',
    icon: 'fas fa-star',
    field_name: 'rating_',
    canHaveAlternateForm: false,
    canHavePageBreakBefore: false,
},
{
    key: 'DatePicker',
    canDefaultToday: true,
    canReadOnly: false,
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    showTimeSelect: false,
    showTimeSelectOnly: false,
    name: 'Date',
    icon: 'far fa-calendar-alt',
    label: 'Placeholder Label',
    field_name: 'date_picker_',
    canHaveAlternateForm: false,
    canHavePageBreakBefore: false,
},
{
    key: 'HyperLink',
    name: 'Web site',
    icon: 'fas fa-link',
    static: true,
    content: 'Placeholder Web site link ...',
    href: 'http://www.example.com',
    canHaveAlternateForm: false,
    canHavePageBreakBefore: false,
},
{
    key: 'Range',
    name: 'Range',
    icon: 'fas fa-sliders-h',
    label: 'Placeholder Label',
    field_name: 'range_',
    step: 1,
    default_value: 3,
    min_value: 1,
    max_value: 5,
    min_label: 'Easy',
    max_label: 'Difficult',
    canHaveAlternateForm: false,
    canHavePageBreakBefore: false,
}
]

ReactDOM.render(
  <FormBuilder.ReactFormBuilder variables={variables}
    url={url}
    saveUrl={saveUrl}
    toolbarItems={items}
  />,
  document.getElementById('form-builder'),
);

// ReactDOM.render(
//   <FormBuilder.ReactFormBuilder variables={variables}
//     onLoad={onLoad}
//     onPost={onPost}
//   />,
//   document.getElementById('form-builder')
// )

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
