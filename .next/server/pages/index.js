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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n//Import das cores padrão\n\n//Skynex\n\n//Global Style\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"6689a537c318c8b5\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none;\\nbackground: \\r\\n        }\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\nfunction Title(props) {\n    //Tag. Pega o que vem da Props, caso contrário, usa h1\n    const Tag = props.tag || \"h1\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"ddc7ec34c9395745\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ddc7ec34c9395745\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"]};\nfont-size:24px;\nfont-weight:600}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n// //Componente React\n// function HomePage() {\n//     return (\n//         <div>\n//             <GlobalStyle />\n//             <Title tag=\"h2\">Seja bem vindo!</Title>\n//             <h2>Discord - Simulado</h2>\n//         </div>\n//     )\n// }\n// export default HomePage\nfunction PaginaInicial() {\n    //Pega a imagem e o nickname do GitHub\n    const username = 'dsslucas';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://i.imgur.com/oy5Y6p4.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_2__.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[800],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: `https://github.com/${username}.png`\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 161,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: `https://github.com/${username}`,\n                                        target: \"_blank\",\n                                        children: username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                        lineNumber: 177,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                            lineNumber: 146,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projetos\\\\imersao-react-alura\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsRUFBeUI7QUFDYTtBQUV0QyxFQUFRO0FBQ2tFO0FBRTFFLEVBQWM7U0FDTE0sV0FBVyxHQUFHLENBQUM7SUFDcEIsTUFBTSxDQUFDLDhEQUFDOzs7O0FBZ0NWLENBQUM7U0FFTUMsS0FBSyxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixFQUFzRDtJQUNyRCxLQUFJLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxHQUFHLElBQUksQ0FBSTtJQUM3QixNQUFNOzt3RkFFR0QsR0FBRzs7Ozs7NEJBRUVBLEdBQUc7NEJBQ1FULHNFQUFxQzs7Ozt3Q0FIaERRLEtBQUssQ0FBQ00sUUFBUTs7Ozs7Ozs7O29CQUVkTCxHQUFHO29CQUNRVCxzRUFBcUM7OzZCQURoRFMsR0FBRyx1Q0FDUVQsc0VBQXFDOzs7Ozs7QUFTbEUsQ0FBQztBQUVELEVBQXFCO0FBQ3JCLEVBQXdCO0FBQ3hCLEVBQWU7QUFDZixFQUFnQjtBQUNoQixFQUE4QjtBQUM5QixFQUFzRDtBQUN0RCxFQUEwQztBQUcxQyxFQUFpQjtBQUNqQixFQUFRO0FBQ1IsRUFBSTtBQUNKLEVBQTBCO0FBRVgsUUFBUSxDQUFDZSxhQUFhLEdBQUcsQ0FBQztJQUNyQyxFQUFzQztJQUN0QyxLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFVO0lBRTNCLE1BQU07O3dGQUVEVixXQUFXOzs7Ozt3RkFDWEwscURBQUc7Z0JBQ0ZnQixVQUFVLEVBQUUsQ0FBQztvQkFDWEMsT0FBTyxFQUFFLENBQU07b0JBQUVDLFVBQVUsRUFBRSxDQUFRO29CQUFFQyxjQUFjLEVBQUUsQ0FBUTtvQkFDL0RDLGVBQWUsRUFBRXJCLG1FQUFtQztvQkFDcER1QixlQUFlLEVBQUUsQ0FBc0M7b0JBQ3ZEQyxnQkFBZ0IsRUFBRSxDQUFXO29CQUFFQyxjQUFjLEVBQUUsQ0FBTztvQkFBRUMsbUJBQW1CLEVBQUUsQ0FBVTtnQkFDekYsQ0FBQztzR0FFQXpCLHFEQUFHO29CQUNGZ0IsVUFBVSxFQUFFLENBQUM7d0JBQ1hDLE9BQU8sRUFBRSxDQUFNO3dCQUNmQyxVQUFVLEVBQUUsQ0FBUTt3QkFDcEJDLGNBQWMsRUFBRSxDQUFlO3dCQUMvQk8sYUFBYSxFQUFFLENBQUM7NEJBQ2RDLEVBQUUsRUFBRSxDQUFROzRCQUNaQyxFQUFFLEVBQUUsQ0FBSzt3QkFDWCxDQUFDO3dCQUNEQyxLQUFLLEVBQUUsQ0FBTTt3QkFBRUMsUUFBUSxFQUFFLENBQU87d0JBQ2hDQyxZQUFZLEVBQUUsQ0FBSzt3QkFBRUMsT0FBTyxFQUFFLENBQU07d0JBQUVDLE1BQU0sRUFBRSxDQUFNO3dCQUNwREMsU0FBUyxFQUFFLENBQStCO3dCQUMxQ2QsZUFBZSxFQUFFckIsb0VBQW9DO29CQUN2RCxDQUFDOztvR0FHQUMscURBQUc7NEJBQ0ZtQyxFQUFFLEVBQUMsQ0FBTTs0QkFDVG5CLFVBQVUsRUFBRSxDQUFDO2dDQUNYQyxPQUFPLEVBQUUsQ0FBTTtnQ0FBRVMsYUFBYSxFQUFFLENBQVE7Z0NBQUVSLFVBQVUsRUFBRSxDQUFRO2dDQUFFQyxjQUFjLEVBQUUsQ0FBUTtnQ0FDeEZVLEtBQUssRUFBRSxDQUFDO29DQUFDRixFQUFFLEVBQUUsQ0FBTTtvQ0FBRUMsRUFBRSxFQUFFLENBQUs7Z0NBQUMsQ0FBQztnQ0FBRVEsU0FBUyxFQUFFLENBQVE7Z0NBQUVDLFlBQVksRUFBRSxDQUFNOzRCQUM3RSxDQUFDOzs0R0FFQS9CLEtBQUs7b0NBQUNHLEdBQUcsRUFBQyxDQUFJOzhDQUFDLENBQXFCOzs7Ozs7NEdBQ3BDUCxzREFBSTtvQ0FBQ29DLE9BQU8sRUFBQyxDQUFPO29DQUFDdEIsVUFBVSxFQUFFLENBQUM7d0NBQUNxQixZQUFZLEVBQUUsQ0FBTTt3Q0FBRUUsS0FBSyxFQUFFeEMsb0VBQW9DO29DQUFDLENBQUM7OENBQ3BHQSw4Q0FBYzs7Ozs7OzRHQUdoQkksMkRBQVM7b0NBQ1JzQyxTQUFTO29DQUNUQyxlQUFlLEVBQUUsQ0FBQzt3Q0FDaEJDLE9BQU8sRUFBRSxDQUFDOzRDQUNSQyxTQUFTLEVBQUU3QyxvRUFBb0M7NENBQy9DOEMsU0FBUyxFQUFFOUMsb0VBQW9DOzRDQUMvQytDLGtCQUFrQixFQUFFL0MsbUVBQW1DOzRDQUN2RHFCLGVBQWUsRUFBRXJCLG9FQUFvQzt3Q0FDdkQsQ0FBQztvQ0FDSCxDQUFDOzs7Ozs7NEdBRUZFLHdEQUFNO29DQUNMOEMsSUFBSSxFQUFDLENBQVE7b0NBQ2JDLEtBQUssRUFBQyxDQUFRO29DQUNkUCxTQUFTO29DQUNUUSxZQUFZLEVBQUUsQ0FBQzt3Q0FDYkMsYUFBYSxFQUFFbkQsc0VBQXFDO3dDQUNwRDhDLFNBQVMsRUFBRTlDLG1FQUFtQzt3Q0FDOUNvRCxjQUFjLEVBQUVwRCxtRUFBbUM7d0NBQ25EcUQsZUFBZSxFQUFFckQsbUVBQW1DO29DQUN0RCxDQUFDOzs7Ozs7Ozs7Ozs7b0dBT0pDLHFEQUFHOzRCQUNGZ0IsVUFBVSxFQUFFLENBQUM7Z0NBQ1hDLE9BQU8sRUFBRSxDQUFNO2dDQUNmUyxhQUFhLEVBQUUsQ0FBUTtnQ0FDdkJSLFVBQVUsRUFBRSxDQUFRO2dDQUNwQlksUUFBUSxFQUFFLENBQU87Z0NBQ2pCRSxPQUFPLEVBQUUsQ0FBTTtnQ0FDZlosZUFBZSxFQUFFckIsb0VBQW9DO2dDQUNyRHNELE1BQU0sRUFBRSxDQUFXO2dDQUNuQkMsV0FBVyxFQUFFdkQsb0VBQW9DO2dDQUNqRGdDLFlBQVksRUFBRSxDQUFNO2dDQUNwQndCLElBQUksRUFBRSxDQUFDO2dDQUNQQyxTQUFTLEVBQUUsQ0FBTzs0QkFDcEIsQ0FBQzs7NEdBRUFwRCx1REFBSztvQ0FDSlksVUFBVSxFQUFFLENBQUM7d0NBQ1hlLFlBQVksRUFBRSxDQUFLO3dDQUNuQk0sWUFBWSxFQUFFLENBQU07b0NBQ3RCLENBQUM7b0NBQ0RvQixHQUFHLEdBQUcsbUJBQW1CLEVBQUUxQyxRQUFRLENBQUMsSUFBSTs7Ozs7OzRHQUV6Q2Isc0RBQUk7b0NBQ0hvQyxPQUFPLEVBQUMsQ0FBTztvQ0FDZnRCLFVBQVUsRUFBRSxDQUFDO3dDQUNYdUIsS0FBSyxFQUFFeEMsb0VBQW9DO3dDQUMzQ3FCLGVBQWUsRUFBRXJCLG9FQUFvQzt3Q0FDckRpQyxPQUFPLEVBQUUsQ0FBVTt3Q0FDbkJELFlBQVksRUFBRSxDQUFRO29DQUN4QixDQUFDOzBIQUVBMkIsQ0FBQzt3Q0FBQ0MsSUFBSSxHQUFHLG1CQUFtQixFQUFFNUMsUUFBUTt3Q0FBSTZDLE1BQU0sRUFBQyxDQUFRO2tEQUFFN0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWxGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWVyc2FvLXJlYWN0LWFsdXJhLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydCBkYXMgY29yZXMgcGFkcsOjb1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xyXG5cclxuLy9Ta3luZXhcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcblxyXG4vL0dsb2JhbCBTdHlsZVxyXG5mdW5jdGlvbiBHbG9iYWxTdHlsZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI19fbmV4dCA+ICoge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogLi9BcHAgZml0IEhlaWdodCAqLyBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBUaXRsZShwcm9wcykge1xyXG4gICAgLy9UYWcuIFBlZ2EgbyBxdWUgdmVtIGRhIFByb3BzLCBjYXNvIGNvbnRyw6FyaW8sIHVzYSBoMVxyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8IFwiaDFcIiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ119O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuLy8gLy9Db21wb25lbnRlIFJlYWN0XHJcbi8vIGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuLy8gICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+U2VqYSBiZW0gdmluZG8hPC9UaXRsZT5cclxuLy8gICAgICAgICAgICAgPGgyPkRpc2NvcmQgLSBTaW11bGFkbzwvaDI+XHJcblxyXG5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIClcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICAgIC8vUGVnYSBhIGltYWdlbSBlIG8gbmlja25hbWUgZG8gR2l0SHViXHJcbiAgICBjb25zdCB1c2VybmFtZSA9ICdkc3NsdWNhcyc7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9veTVZNnA0LmpwZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUaXRsZSB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD1cImJvZHkzXCIgc3R5bGVTaGVldD17eyBtYXJnaW5Cb3R0b206ICczMnB4JywgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSB9fT5cclxuICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgXHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgbmV1dHJhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuICBcclxuICBcclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfWB9IHRhcmdldD1cIl9ibGFua1wiPnt1c2VybmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiJdLCJuYW1lcyI6WyJhcHBDb25maWciLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJHbG9iYWxTdHlsZSIsIlRpdGxlIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwiY2hpbGRyZW4iLCJQYWdpbmFJbmljaWFsIiwidXNlcm5hbWUiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImFzIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiLCJhIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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