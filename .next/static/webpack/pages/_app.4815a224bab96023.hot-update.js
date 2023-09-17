"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons */ \"./src/components/Icons.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 \".concat(router.asPath === href ? \"w-full\" : \"w-0\"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w=full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"Sobre\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projetos\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/blog\",\n                        title: \"Blog\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/contact\",\n                        title: \"Contato\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center justify-center flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex items-center justify-center flex-wrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://www.linkedin.com/in/marcos-panontin/\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -3\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-9 mr-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.LinkedinIcon, {}, void 0, false, {\n                                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://github.com/marcos-panontin\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -3\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-9 mx-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.GithubIcon, {}, void 0, false, {\n                                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com/marcospanontin\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -3\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-9 ml-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.TwitterIcon, {}, void 0, false, {\n                                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex items-center justify-center flex-wrap bl-8 border-left-solid border-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com/marcospanontin\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -3\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-9 ml-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_5__.SunIcon, {}, void 0, false, {\n                                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {\n                                href: \"https://twitter.com/marcospanontin\",\n                                target: \"_blank\",\n                                whileHover: {\n                                    y: -3\n                                },\n                                whileTap: {\n                                    scale: 0.9\n                                },\n                                className: \"w-9 ml-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"PT\"\n                                }, void 0, false, {\n                                    fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/marcos/Documents/New-Portfolio/src/components/NavBar.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDSDtBQUNjO0FBQ2lDO0FBQ2xDO0FBRXRDLE1BQU1TLGFBQWEsU0FBcUM7UUFBcEMsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFdBQVksR0FBRSxFQUFFOztJQUVqRCxNQUFNQyxTQUFTVixzREFBU0E7SUFDeEIscUJBQ0UsOERBQUNGLGtEQUFJQTtRQUFDUyxNQUFNQTtRQUFNRSxXQUFXLEdBQWEsT0FBVkEsV0FBVTs7WUFDdkNEOzBCQUNELDhEQUFDRztnQkFBS0YsV0FBVyxvSEFBOEosT0FBMUNDLE9BQU9FLE1BQU0sS0FBS0wsT0FBTyxXQUFXLEtBQUs7MEJBQUk7Ozs7Ozs7Ozs7OztBQUd4TDtHQVRNRDs7UUFFV04sa0RBQVNBOzs7S0FGcEJNO0FBV04sTUFBTU8sU0FBUyxJQUFNO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFPTCxXQUFVOzswQkFDaEIsOERBQUNNOztrQ0FDQyw4REFBQ1Q7d0JBQVdDLE1BQUs7d0JBQUlDLE9BQU07d0JBQU9DLFdBQVU7Ozs7OztrQ0FDNUMsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFTQyxPQUFNO3dCQUFRQyxXQUFVOzs7Ozs7a0NBQ2xELDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBWUMsT0FBTTt3QkFBV0MsV0FBVTs7Ozs7O2tDQUN4RCw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVFDLE9BQU07d0JBQU9DLFdBQVU7Ozs7OztrQ0FDaEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFXQyxPQUFNO3dCQUFVQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBR3hELDhEQUFDTztnQkFBSVAsV0FBVTswQkFDZiw0RUFBQ1YsNkNBQUlBOzs7Ozs7Ozs7OzBCQUtMLDhEQUFDZ0I7Z0JBQUlOLFdBQVU7O2tDQUViLDhEQUFDUTt3QkFBUVIsV0FBVTs7MENBQ2pCLDhEQUFDSixtREFBUTtnQ0FBQ0UsTUFBSztnQ0FBK0NZLFFBQU87Z0NBQVNDLFlBQVk7b0NBQUNDLEdBQUcsQ0FBQztnQ0FBQztnQ0FBR0MsVUFBVTtvQ0FBQ0MsT0FBTztnQ0FBRztnQ0FBR2QsV0FBVTswQ0FDbkksNEVBQUNQLGdEQUFZQTs7Ozs7Ozs7OzswQ0FFZiw4REFBQ0csbURBQVE7Z0NBQUNFLE1BQUs7Z0NBQXFDWSxRQUFPO2dDQUFTQyxZQUFZO29DQUFDQyxHQUFHLENBQUM7Z0NBQUM7Z0NBQUdDLFVBQVU7b0NBQUNDLE9BQU87Z0NBQUc7Z0NBQUdkLFdBQVU7MENBQ3pILDRFQUFDUiw4Q0FBVUE7Ozs7Ozs7Ozs7MENBRWIsOERBQUNJLG1EQUFRO2dDQUFDRSxNQUFLO2dDQUFxQ1ksUUFBTztnQ0FBU0MsWUFBWTtvQ0FBQ0MsR0FBRyxDQUFDO2dDQUFDO2dDQUFHQyxVQUFVO29DQUFDQyxPQUFPO2dDQUFHO2dDQUFHZCxXQUFVOzBDQUN6SCw0RUFBQ0wsK0NBQVdBOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUloQiw4REFBQ2E7d0JBQVFSLFdBQVU7OzBDQUNqQiw4REFBQ0osbURBQVE7Z0NBQUNFLE1BQUs7Z0NBQXFDWSxRQUFPO2dDQUFTQyxZQUFZO29DQUFDQyxHQUFHLENBQUM7Z0NBQUM7Z0NBQUdDLFVBQVU7b0NBQUNDLE9BQU87Z0NBQUc7Z0NBQUdkLFdBQVU7MENBQ3pILDRFQUFDTiwyQ0FBT0E7Ozs7Ozs7Ozs7MENBRVYsOERBQUNFLG1EQUFRO2dDQUFDRSxNQUFLO2dDQUFxQ1ksUUFBTztnQ0FBU0MsWUFBWTtvQ0FBQ0MsR0FBRyxDQUFDO2dDQUFDO2dDQUFHQyxVQUFVO29DQUFDQyxPQUFPO2dDQUFHO2dDQUFHZCxXQUFVOzBDQUN6SCw0RUFBQ2U7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO01BMUNNWDtBQTRDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4PzkxNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBHaXRodWJJY29uLCBMaW5rZWRpbkljb24sIFN1bkljb24sIFR3aXR0ZXJJY29uIH0gZnJvbSAnLi9JY29ucydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IEN1c3RvbUxpbmsgPSAoeyBocmVmLCB0aXRsZSwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByZWxhdGl2ZSBncm91cGB9PlxuICAgICAge3RpdGxlfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC1bMXB4XSBpbmxpbmUtYmxvY2sgYmctZGFyayBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjUgZ3JvdXAtaG92ZXI6dy1mdWxsIHRyYW5zaXRpb24tW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMCAke3JvdXRlci5hc1BhdGggPT09IGhyZWYgPyAndy1mdWxsJyA6IFwidy0wXCJ9YH0+Jm5ic3A7PC9zcGFuPlxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3c9ZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICA8bmF2PlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT0nbXItNCcvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Fib3V0XCIgdGl0bGU9XCJTb2JyZVwiIGNsYXNzTmFtZT0nbXgtNCcvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL3Byb2plY3RzXCIgdGl0bGU9XCJQcm9qZXRvc1wiIGNsYXNzTmFtZT0nbXgtNCcvPlxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2Jsb2dcIiB0aXRsZT1cIkJsb2dcIiBjbGFzc05hbWU9J214LTQnLz5cbiAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9jb250YWN0XCIgdGl0bGU9XCJDb250YXRvXCIgY2xhc3NOYW1lPSdtbC00Jy8+XG4gICAgICA8L25hdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGxlZnQtWzUwJV0gdG9wLTIgdHJhbnNsYXRlLXgtWy01MCVdJz5cbiAgICAgIDxMb2dvIC8+XG5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LXdyYXAnPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwJz5cbiAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXJjb3MtcGFub250aW4vXCIgdGFyZ2V0PSdfYmxhbmsnIHdoaWxlSG92ZXI9e3t5OiAtM319IHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19IGNsYXNzTmFtZT0ndy05IG1yLTUnPlxuICAgICAgICAgICAgPExpbmtlZGluSWNvbiAvPlxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFyY29zLXBhbm9udGluXCIgdGFyZ2V0PSdfYmxhbmsnIHdoaWxlSG92ZXI9e3t5OiAtM319IHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19IGNsYXNzTmFtZT0ndy05IG14LTUnPlxuICAgICAgICAgICAgPEdpdGh1Ykljb24gLz5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgIDxtb3Rpb24uYSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9tYXJjb3NwYW5vbnRpblwiIHRhcmdldD0nX2JsYW5rJyB3aGlsZUhvdmVyPXt7eTogLTN9fSB3aGlsZVRhcD17e3NjYWxlOiAwLjl9fSBjbGFzc05hbWU9J3ctOSBtbC01Jz5cbiAgICAgICAgICAgIDxUd2l0dGVySWNvbiAvPlxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBibC04IGJvcmRlci1sZWZ0LXNvbGlkIGJvcmRlci0yJz5cbiAgICAgICAgICA8bW90aW9uLmEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWFyY29zcGFub250aW5cIiB0YXJnZXQ9J19ibGFuaycgd2hpbGVIb3Zlcj17e3k6IC0zfX0gd2hpbGVUYXA9e3tzY2FsZTogMC45fX0gY2xhc3NOYW1lPSd3LTkgbWwtNSc+XG4gICAgICAgICAgICA8U3VuSWNvbiAvPlxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgICAgPG1vdGlvbi5hIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL21hcmNvc3Bhbm9udGluXCIgdGFyZ2V0PSdfYmxhbmsnIHdoaWxlSG92ZXI9e3t5OiAtM319IHdoaWxlVGFwPXt7c2NhbGU6IDAuOX19IGNsYXNzTmFtZT0ndy05IG1sLTUnPlxuICAgICAgICAgICAgPGgxPlBUPC9oMT5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiTG9nbyIsInVzZVJvdXRlciIsIkdpdGh1Ykljb24iLCJMaW5rZWRpbkljb24iLCJTdW5JY29uIiwiVHdpdHRlckljb24iLCJtb3Rpb24iLCJDdXN0b21MaW5rIiwiaHJlZiIsInRpdGxlIiwiY2xhc3NOYW1lIiwicm91dGVyIiwic3BhbiIsImFzUGF0aCIsIk5hdkJhciIsImhlYWRlciIsIm5hdiIsImRpdiIsInNlY3Rpb24iLCJhIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInkiLCJ3aGlsZVRhcCIsInNjYWxlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.jsx\n"));

/***/ })

});