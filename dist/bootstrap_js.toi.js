"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktoi"] = self["webpackChunktoi"] || []).push([["bootstrap_js"],{

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_toi_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/toi.jsx */ \"./src/toi.jsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_toi_jsx__WEBPACK_IMPORTED_MODULE_2__.TOI, null), document.getElementById('toi-app-root'));\n\n//# sourceURL=webpack://toi/./bootstrap.js?");

/***/ }),

/***/ "./src/components/content/content.styled.component.jsx":
/*!*************************************************************!*\
  !*** ./src/components/content/content.styled.component.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContentColumnContainer: () => (/* binding */ ContentColumnContainer),\n/* harmony export */   ContentContainer: () => (/* binding */ ContentContainer),\n/* harmony export */   SliderContainer: () => (/* binding */ SliderContainer)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject, _templateObject2, _templateObject3;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\ndisplay: grid;\\ngrid-row-gap: 5px;\\n\"])));\nvar ContentColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\ndisplay: grid;\\ngrid-template-columns: 1fr 1fr 1fr;\\n\"])));\nvar SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\"])));\n\n//# sourceURL=webpack://toi/./src/components/content/content.styled.component.jsx?");

/***/ }),

/***/ "./src/components/content/index.jsx":
/*!******************************************!*\
  !*** ./src/components/content/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.styled.component.jsx */ \"./src/components/content/content.styled.component.jsx\");\n\n\nvar CityBasedContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {\n  return __webpack_require__.e(/*! import() */ \"webpack_container_remote_Home_home\").then(__webpack_require__.t.bind(__webpack_require__, /*! Home/home */ \"webpack/container/remote/Home/home\", 23));\n});\nvar DefaultContent = function DefaultContent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__.ContentContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__.ContentColumnContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Column:1 content\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Column:2 content\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Column:3 content\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__.SliderContainer, null, \"Sliders : This will be served from Slider App component.\"));\n};\nvar Content = function Content() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Suspense), {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DefaultContent, null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CityBasedContent, null) || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DefaultContent, null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);\n\n//# sourceURL=webpack://toi/./src/components/content/index.jsx?");

/***/ }),

/***/ "./src/components/footer/footer.styled.component.jsx":
/*!***********************************************************!*\
  !*** ./src/components/footer/footer.styled.component.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FooterContainer: () => (/* binding */ FooterContainer)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\ntext-align: center;\\nbackground-color: aliceblue;\\n\"])));\n\n//# sourceURL=webpack://toi/./src/components/footer/footer.styled.component.jsx?");

/***/ }),

/***/ "./src/components/footer/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/footer/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.styled.component.jsx */ \"./src/components/footer/footer.styled.component.jsx\");\n\n\nvar Footer = function Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__.FooterContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Footer Component : This will be served from Footer App component\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://toi/./src/components/footer/index.jsx?");

/***/ }),

/***/ "./src/components/header/header.styled.component.jsx":
/*!***********************************************************!*\
  !*** ./src/components/header/header.styled.component.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderContainer: () => (/* binding */ HeaderContainer)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\ntext-align: center;\\nbackground-color: aqua;\\n\"])));\n\n//# sourceURL=webpack://toi/./src/components/header/header.styled.component.jsx?");

/***/ }),

/***/ "./src/components/header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.styled.component.jsx */ \"./src/components/header/header.styled.component.jsx\");\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header_styled_component_jsx__WEBPACK_IMPORTED_MODULE_1__.HeaderContainer, null, \"Header : This will be served from Header App component.\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://toi/./src/components/header/index.jsx?");

/***/ }),

/***/ "./src/toi.jsx":
/*!*********************!*\
  !*** ./src/toi.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TOI: () => (/* binding */ TOI)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_header_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/header/index.jsx */ \"./src/components/header/index.jsx\");\n/* harmony import */ var components_content_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/content/index.jsx */ \"./src/components/content/index.jsx\");\n/* harmony import */ var components_footer_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer/index.jsx */ \"./src/components/footer/index.jsx\");\n/* harmony import */ var _toi_styled_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toi.styled.component */ \"./src/toi.styled.component.jsx\");\n\n\n\n\n\nvar TOI = function TOI() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toi_styled_component__WEBPACK_IMPORTED_MODULE_4__.ToiContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_header_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_content_index_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_footer_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\n//# sourceURL=webpack://toi/./src/toi.jsx?");

/***/ }),

/***/ "./src/toi.styled.component.jsx":
/*!**************************************!*\
  !*** ./src/toi.styled.component.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToiContainer: () => (/* binding */ ToiContainer)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"webpack/sharing/consume/default/styled-components/styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar ToiContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\ndisplay: grid;\\ngrid-row-gap: 10px ;\\n\"])));\n\n//# sourceURL=webpack://toi/./src/toi.styled.component.jsx?");

/***/ })

}]);