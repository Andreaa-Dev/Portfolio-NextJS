"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Project(param) {\n    let { title, description, tags, imageUrl } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.33 1\"\n        ]\n    });\n    const scaleProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    const opacityProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.6,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        ref: ref,\n        style: {\n            scale: scaleProgess,\n            opacity: opacityProgess\n        },\n        className: \"group mb-3 sm:mb-8 last:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-2xl font-semibold\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 leading-relaxed text-gray-700 dark:text-white/70\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-wrap mt-4 gap-2 sm:mt-auto\",\n                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70\",\n                                    children: tag\n                                }, index, false, {\n                                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: imageUrl,\n                    alt: \"Project I worked on\",\n                    quality: 95,\n                    className: \"absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"bUn7Yqu7iysk+L6Z0DhRIR4HchU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUVBO0FBQ2lDO0FBSWpELFNBQVNLLFFBQVEsS0FLakI7UUFMaUIsRUFDOUJDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxJQUFJLEVBQ0pDLFFBQVEsRUFDSyxHQUxpQjs7SUFNOUIsTUFBTUMsTUFBTVYsNkNBQU1BLENBQWlCO0lBQ25DLE1BQU0sRUFBRVcsZUFBZSxFQUFFLEdBQUdSLHdEQUFTQSxDQUFDO1FBQ3BDUyxRQUFRRjtRQUNSRyxRQUFRO1lBQUM7WUFBTztTQUFTO0lBQzNCO0lBQ0EsTUFBTUMsZUFBZVYsMkRBQVlBLENBQUNPLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBQ25FLE1BQU1JLGlCQUFpQlgsMkRBQVlBLENBQUNPLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBRXJFLHFCQUNFLDhEQUFDVCxpREFBTUEsQ0FBQ2MsR0FBRztRQUNUTixLQUFLQTtRQUNMTyxPQUFPO1lBQ0xDLE9BQU9KO1lBQ1BLLFNBQVNKO1FBQ1g7UUFDQUssV0FBVTtrQkFFViw0RUFBQ0M7WUFBUUQsV0FBVTs7OEJBQ2pCLDhEQUFDSjtvQkFBSUksV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFHRixXQUFVO3NDQUEwQmQ7Ozs7OztzQ0FDeEMsOERBQUNpQjs0QkFBRUgsV0FBVTtzQ0FDVmI7Ozs7OztzQ0FFSCw4REFBQ2lCOzRCQUFHSixXQUFVO3NDQUNYWixLQUFLaUIsR0FBRyxDQUFDLENBQUNDLEtBQUtDLHNCQUNkLDhEQUFDQztvQ0FDQ1IsV0FBVTs4Q0FHVE07bUNBRklDOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVFiLDhEQUFDMUIsbURBQUtBO29CQUNKNEIsS0FBS3BCO29CQUNMcUIsS0FBSTtvQkFDSkMsU0FBUztvQkFDVFgsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnBCO0dBN0R3QmY7O1FBT01GLG9EQUFTQTtRQUloQkMsdURBQVlBO1FBQ1ZBLHVEQUFZQTs7O0tBWmJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdC50c3g/N2NlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0RhdGEgfSBmcm9tIFwiQC9saWIvZGF0YVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlVHJhbnNmb3JtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxudHlwZSBQcm9qZWN0UHJvcHMgPSAodHlwZW9mIHByb2plY3RzRGF0YSlbbnVtYmVyXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgdGFncyxcbiAgaW1hZ2VVcmwsXG59OiBQcm9qZWN0UHJvcHMpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XG4gICAgdGFyZ2V0OiByZWYsXG4gICAgb2Zmc2V0OiBbXCIwIDFcIiwgXCIxLjMzIDFcIl0sXG4gIH0pO1xuICBjb25zdCBzY2FsZVByb2dlc3MgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLjgsIDFdKTtcbiAgY29uc3Qgb3BhY2l0eVByb2dlc3MgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLjYsIDFdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHNjYWxlOiBzY2FsZVByb2dlc3MsXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHlQcm9nZXNzLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImdyb3VwIG1iLTMgc206bWItOCBsYXN0Om1iLTBcIlxuICAgID5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIG1heC13LVs1MHJlbV0gYm9yZGVyIGJvcmRlci1ibGFjay81IHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNtOnByLTggcmVsYXRpdmUgc206aC1bMjByZW1dIGhvdmVyOmJnLWdyYXktMjAwIHRyYW5zaXRpb24gc206Z3JvdXAtZXZlbjpwbC04IGRhcms6dGV4dC13aGl0ZSBkYXJrOmJnLXdoaXRlLzEwIGRhcms6aG92ZXI6Ymctd2hpdGUvMjBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTcgcHgtNSBzbTpwbC0xMCBzbTpwci0yIHNtOnB0LTEwIHNtOm1heC13LVs1MCVdIGZsZXggZmxleC1jb2wgaC1mdWxsIHNtOmdyb3VwLWV2ZW46bWwtWzE4cmVtXVwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtd2hpdGUvNzBcIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG10LTQgZ2FwLTIgc206bXQtYXV0b1wiPlxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrL1swLjddIHB4LTMgcHktMSB0ZXh0LVswLjdyZW1dIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBkYXJrOnRleHQtd2hpdGUvNzBcIlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICBhbHQ9XCJQcm9qZWN0IEkgd29ya2VkIG9uXCJcbiAgICAgICAgICBxdWFsaXR5PXs5NX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoaWRkZW4gc206YmxvY2sgdG9wLTggLXJpZ2h0LTQwIHctWzI4LjI1cmVtXSByb3VuZGVkLXQtbGcgc2hhZG93LTJ4bFxuICAgICAgICB0cmFuc2l0aW9uIFxuICAgICAgICBncm91cC1ob3ZlcjpzY2FsZS1bMS4wNF1cbiAgICAgICAgZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS14LTNcbiAgICAgICAgZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktM1xuICAgICAgICBncm91cC1ob3Zlcjotcm90YXRlLTJcblxuICAgICAgICBncm91cC1ldmVuOmdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTNcbiAgICAgICAgZ3JvdXAtZXZlbjpncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0zXG4gICAgICAgIGdyb3VwLWV2ZW46Z3JvdXAtaG92ZXI6cm90YXRlLTJcblxuICAgICAgICBncm91cC1ldmVuOnJpZ2h0LVtpbml0aWFsXSBncm91cC1ldmVuOi1sZWZ0LTQwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiSW1hZ2UiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJpbWFnZVVybCIsInJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsIm9mZnNldCIsInNjYWxlUHJvZ2VzcyIsIm9wYWNpdHlQcm9nZXNzIiwiZGl2Iiwic3R5bGUiLCJzY2FsZSIsIm9wYWNpdHkiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDMiLCJwIiwidWwiLCJtYXAiLCJ0YWciLCJpbmRleCIsImxpIiwic3JjIiwiYWx0IiwicXVhbGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/project.tsx\n"));

/***/ })

});