"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n//Import das cores padrão\n\n//Skynex\n\n//Global Style\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"6689a537c318c8b5\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none;\\nbackground: \\r\\n        }\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\nfunction Title(props) {\n    //Tag. Pega o que vem da Props, caso contrário, usa h1\n    const Tag = props.tag || \"h1\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"ddc7ec34c9395745\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ddc7ec34c9395745\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// //Componente React\n// function HomePage() {\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Title tag=\"h2\">Seja bem vindo!</Title>\n//             <h2>Discord - Simulado</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    //Pega a imagem do GitHub\n    //const username = 'dsslucas';\n    //Meu GitHub. Acesso via API\n    const gitHubApi = 'https://api.github.com/users/dsslucas';\n    console.log(gitHubApi);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://i.imgur.com/oy5Y6p4.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: 'Imagem'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: 'Nome'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 172,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7d0NBQ1h1QixLQUFLLEVBQUUxQyxvRUFBb0M7d0NBQzNDdUIsZUFBZSxFQUFFdkIsb0VBQW9DO3dDQUNyRG1DLE9BQU8sRUFBRSxDQUFVO3dDQUNuQkQsWUFBWSxFQUFFLENBQVE7b0NBQ3hCLENBQUM7OENBRUEsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1lcnNhby1yZWFjdC1hbHVyYS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9JbXBvcnQgZGFzIGNvcmVzIHBhZHLDo29cclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuXHJcbi8vU2t5bmV4XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5cclxuLy9HbG9iYWwgU3R5bGVcclxuZnVuY3Rpb24gR2xvYmFsU3R5bGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgICAgIGh0bWwsIGJvZHksICNfX25leHQge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gVGl0bGUocHJvcHMpIHtcclxuICAgIC8vVGFnLiBQZWdhIG8gcXVlIHZlbSBkYSBQcm9wcywgY2FzbyBjb250csOhcmlvLCB1c2EgaDFcclxuICAgIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCBcImgxXCIgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbi8vIC8vQ29tcG9uZW50ZSBSZWFjdFxyXG4vLyBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbi8vICAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPlNlamEgYmVtIHZpbmRvITwvVGl0bGU+XHJcbi8vICAgICAgICAgICAgIDxoMj5EaXNjb3JkIC0gU2ltdWxhZG88L2gyPlxyXG5cclxuXHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICApXHJcbi8vIH1cclxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgICAvL1BlZ2EgYSBpbWFnZW0gZG8gR2l0SHViXHJcbiAgICAvL2NvbnN0IHVzZXJuYW1lID0gJ2Rzc2x1Y2FzJztcclxuICBcclxuICAgIC8vTWV1IEdpdEh1Yi4gQWNlc3NvIHZpYSBBUElcclxuICAgIGNvbnN0IGdpdEh1YkFwaSA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2Rzc2x1Y2FzJ1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGdpdEh1YkFwaSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2kuaW1ndXIuY29tL295NVk2cDQuanBnKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgc206ICdyb3cnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxyXG4gICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICBcclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9eydJbWFnZW0nfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsnTm9tZSd9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiJdLCJuYW1lcyI6WyJhcHBDb25maWciLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJHbG9iYWxTdHlsZSIsIlRpdGxlIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwiZ2l0SHViQXBpIiwiY29uc29sZSIsImxvZyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Lucas Souza#5360","theme":{"colors":{"primary":{"100":"#ADE8F4","200":"#90E0EF","300":"#48CAE4","400":"#00B4D8","500":"#0096C7","600":"#0077B6","700":"#023E8A","800":"#03045E","900":"#030338","050":"#CAF0F8"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();