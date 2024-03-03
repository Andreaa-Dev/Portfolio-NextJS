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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project(param) {\n    let { title, description, tags, imageUrl, githubLink } = param;\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)({\n        target: ref,\n        offset: [\n            \"0 1\",\n            \"1.33 1\"\n        ]\n    });\n    const scaleProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.8,\n        1\n    ]);\n    const opacityProgess = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0.6,\n        1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        ref: ref,\n        style: {\n            scale: scaleProgess,\n            opacity: opacityProgess\n        },\n        className: \"group mb-3 sm:mb-8 last:mb-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: githubLink,\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-semibold\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-2 leading-relaxed text-gray-700 dark:text-white/70\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-wrap mt-4 gap-2 sm:mt-auto\",\n                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70\",\n                                    children: tag\n                                }, index, false, {\n                                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: imageUrl,\n                    alt: \"Project I worked on\",\n                    quality: 95,\n                    className: \"absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  group-even:right-[initial] group-even:-left-40\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andrea/projects/portfolio-website/components/project.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"bUn7Yqu7iysk+L6Z0DhRIR4HchU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useTransform\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBRUE7QUFDaUM7QUFDbkM7QUFJZCxTQUFTTSxRQUFRLEtBTWpCO1FBTmlCLEVBQzlCQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsSUFBSSxFQUNKQyxRQUFRLEVBQ1JDLFVBQVUsRUFDRyxHQU5pQjs7SUFPOUIsTUFBTUMsTUFBTVosNkNBQU1BLENBQWlCO0lBQ25DLE1BQU0sRUFBRWEsZUFBZSxFQUFFLEdBQUdWLHdEQUFTQSxDQUFDO1FBQ3BDVyxRQUFRRjtRQUNSRyxRQUFRO1lBQUM7WUFBTztTQUFTO0lBQzNCO0lBQ0EsTUFBTUMsZUFBZVosMkRBQVlBLENBQUNTLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBQ25FLE1BQU1JLGlCQUFpQmIsMkRBQVlBLENBQUNTLGlCQUFpQjtRQUFDO1FBQUc7S0FBRSxFQUFFO1FBQUM7UUFBSztLQUFFO0lBRXJFLHFCQUNFLDhEQUFDWCxpREFBTUEsQ0FBQ2dCLEdBQUc7UUFDVE4sS0FBS0E7UUFDTE8sT0FBTztZQUNMQyxPQUFPSjtZQUNQSyxTQUFTSjtRQUNYO1FBQ0FLLFdBQVU7a0JBRVYsNEVBQUNDO1lBQVFELFdBQVU7OzhCQUNqQiw4REFBQ0o7b0JBQUlJLFdBQVU7O3NDQUNiLDhEQUFDakIsa0RBQUlBOzRCQUFDbUIsTUFBTWI7O2dDQUNUOzhDQUNELDhEQUFDYztvQ0FBR0gsV0FBVTs4Q0FBMEJmOzs7Ozs7Ozs7Ozs7c0NBRTFDLDhEQUFDbUI7NEJBQUVKLFdBQVU7c0NBQ1ZkOzs7Ozs7c0NBRUgsOERBQUNtQjs0QkFBR0wsV0FBVTtzQ0FDWGIsS0FBS21CLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ0M7b0NBQ0NULFdBQVU7OENBR1RPO21DQUZJQzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFRYiw4REFBQzdCLG1EQUFLQTtvQkFDSitCLEtBQUt0QjtvQkFDTHVCLEtBQUk7b0JBQ0pDLFNBQVM7b0JBQ1RaLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwQjtHQWpFd0JoQjs7UUFRTUgsb0RBQVNBO1FBSWhCQyx1REFBWUE7UUFDVkEsdURBQVlBOzs7S0FiYkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeD83Y2U1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHByb2plY3RzRGF0YSB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG50eXBlIFByb2plY3RQcm9wcyA9ICh0eXBlb2YgcHJvamVjdHNEYXRhKVtudW1iZXJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB0YWdzLFxuICBpbWFnZVVybCxcbiAgZ2l0aHViTGluayxcbn06IFByb2plY3RQcm9wcykge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHtcbiAgICB0YXJnZXQ6IHJlZixcbiAgICBvZmZzZXQ6IFtcIjAgMVwiLCBcIjEuMzMgMVwiXSxcbiAgfSk7XG4gIGNvbnN0IHNjYWxlUHJvZ2VzcyA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAuOCwgMV0pO1xuICBjb25zdCBvcGFjaXR5UHJvZ2VzcyA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAuNiwgMV0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgc2NhbGU6IHNjYWxlUHJvZ2VzcyxcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eVByb2dlc3MsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgbWItMyBzbTptYi04IGxhc3Q6bWItMFwiXG4gICAgPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgbWF4LXctWzQycmVtXSBib3JkZXIgYm9yZGVyLWJsYWNrLzUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc206cHItOCByZWxhdGl2ZSBzbTpoLVsyMHJlbV0gaG92ZXI6YmctZ3JheS0yMDAgdHJhbnNpdGlvbiBzbTpncm91cC1ldmVuOnBsLTggZGFyazp0ZXh0LXdoaXRlIGRhcms6Ymctd2hpdGUvMTAgZGFyazpob3ZlcjpiZy13aGl0ZS8yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgcGItNyBweC01IHNtOnBsLTEwIHNtOnByLTIgc206cHQtMTAgc206bWF4LXctWzUwJV0gZmxleCBmbGV4LWNvbCBoLWZ1bGwgc206Z3JvdXAtZXZlbjptbC1bMjByZW1dXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Z2l0aHViTGlua30+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZS83MFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXQtNCBnYXAtMiBzbTptdC1hdXRvXCI+XG4gICAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2svWzAuN10gcHgtMyBweS0xIHRleHQtWzAuN3JlbV0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIGRhcms6dGV4dC13aGl0ZS83MFwiXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWd9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxuICAgICAgICAgIGFsdD1cIlByb2plY3QgSSB3b3JrZWQgb25cIlxuICAgICAgICAgIHF1YWxpdHk9ezk1fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGhpZGRlbiBzbTpibG9jayB0b3AtOCAtcmlnaHQtNDAgdy1bMjguMjVyZW1dIHJvdW5kZWQtdC1sZyBzaGFkb3ctMnhsXG4gICAgICAgIHRyYW5zaXRpb24gXG4gICAgICAgIGdyb3VwLWhvdmVyOnNjYWxlLVsxLjA0XVxuICAgICAgICBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXgtM1xuICAgICAgICBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0zXG4gICAgICAgIGdyb3VwLWhvdmVyOi1yb3RhdGUtMlxuXG4gICAgICAgIGdyb3VwLWV2ZW46Z3JvdXAtaG92ZXI6dHJhbnNsYXRlLXgtM1xuICAgICAgICBncm91cC1ldmVuOmdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTNcbiAgICAgICAgZ3JvdXAtZXZlbjpncm91cC1ob3Zlcjpyb3RhdGUtMlxuXG4gICAgICAgIGdyb3VwLWV2ZW46cmlnaHQtW2luaXRpYWxdIGdyb3VwLWV2ZW46LWxlZnQtNDBcIlxuICAgICAgICAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJJbWFnZSIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVRyYW5zZm9ybSIsIkxpbmsiLCJQcm9qZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJpbWFnZVVybCIsImdpdGh1YkxpbmsiLCJyZWYiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0YXJnZXQiLCJvZmZzZXQiLCJzY2FsZVByb2dlc3MiLCJvcGFjaXR5UHJvZ2VzcyIsImRpdiIsInN0eWxlIiwic2NhbGUiLCJvcGFjaXR5IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImhyZWYiLCJoMyIsInAiLCJ1bCIsIm1hcCIsInRhZyIsImluZGV4IiwibGkiLCJzcmMiLCJhbHQiLCJxdWFsaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/project.tsx\n"));

/***/ })

});