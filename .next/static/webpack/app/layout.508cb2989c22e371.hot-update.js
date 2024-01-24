"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _images_dior_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dior.png */ \"(app-client)/./images/dior.png\");\n/* harmony import */ var _images_bike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bike.png */ \"(app-client)/./images/bike.png\");\n/* harmony import */ var _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cloth.png */ \"(app-client)/./images/cloth.png\");\n/* harmony import */ var _images_meal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/meal.png */ \"(app-client)/./images/meal.png\");\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Self-learning\",\n        location: \"Udemy online\",\n        description: \" some description\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__.CgWorkAlt),\n        date: \"2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Dior Website\",\n        description: \"an e-commerce\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"MongoDB\"\n        ],\n        imageUrl: _images_dior_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Helsinki Bike\",\n        description: \"bike\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Redux\",\n            \"Express\",\n            \"MongoBD\"\n        ],\n        imageUrl: _images_bike_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"E-commerce\",\n        description: \"angular\",\n        tags: [\n            \"Angular\",\n            \"NgRx\"\n        ],\n        imageUrl: _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Meal \",\n        description: \"vue\",\n        tags: [\n            \"Vue\"\n        ],\n        imageUrl: _images_meal_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Angular\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"MongoDB\",\n    \"Redux\",\n    \"Express\",\n    \"PostgreSQL\",\n    \"Testing (Jest)\",\n    \"Docker\",\n    \"Figma\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNGO0FBQ1E7QUFDWDtBQUNBO0FBQ0U7QUFDRjtBQUUvQixNQUFNUSxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTWYsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q2MsTUFBTTtJQUNSO0lBRUE7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWYsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2dCLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1mLDBEQUFtQixDQUFDRSxtREFBT0E7UUFDakNlLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxlQUFlO0lBQzFCO1FBQ0VOLE9BQU87UUFDUEUsYUFBYTtRQUNiSyxNQUFNO1lBQUM7WUFBUztZQUFTO1NBQVU7UUFDbkNDLFVBQVVoQix3REFBSUE7SUFDaEI7SUFDQTtRQUNFUSxPQUFPO1FBQ1BFLGFBQWE7UUFDYkssTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFTO1lBQVc7U0FBVTtRQUM1REMsVUFBVWYsd0RBQUlBO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQRSxhQUFhO1FBQ2JLLE1BQU07WUFBQztZQUFXO1NBQU87UUFDekJDLFVBQVVkLHlEQUFLQTtJQUNqQjtJQUNBO1FBQ0VNLE9BQU87UUFDUEUsYUFBYTtRQUNiSyxNQUFNO1lBQUM7U0FBTTtRQUNiQyxVQUFVYix3REFBSUE7SUFDaEI7Q0FDRCxDQUFVO0FBRUosTUFBTWMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IEZhUmVhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuaW1wb3J0IGRpb3IgZnJvbSBcIi4uL2ltYWdlcy9kaW9yLnBuZ1wiO1xuaW1wb3J0IGJpa2UgZnJvbSBcIi4uL2ltYWdlcy9iaWtlLnBuZ1wiO1xuaW1wb3J0IGNsb3RoIGZyb20gXCIuLi9pbWFnZXMvY2xvdGgucG5nXCI7XG5pbXBvcnQgbWVhbCBmcm9tIFwiLi4vaW1hZ2VzL21lYWwucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNlbGYtbGVhcm5pbmdcIixcbiAgICBsb2NhdGlvbjogXCJVZGVteSBvbmxpbmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgc29tZSBkZXNjcmlwdGlvblwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTHVHcmFkdWF0aW9uQ2FwKSxcbiAgICBkYXRlOiBcIjIwMTlcIixcbiAgfSxcblxuICB7XG4gICAgdGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhlbHNpbmtpLCBGaW5sYW5kXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgYWxtb3N0IGEgeWVhci4gTXkgbWFpbiB0YXNrIGlzIHRvIHRha2Ugb3ZlciB0aGUgbWFpbnRlbmFuY2Ugb2YgdGhlIHJlc3RhdXJhbnQncyB3ZWJzaXRlIGJ5IHJlLWRlc2lnbiBhbmQgdXBkYXRlIHRoZSBzaXRlIGNvbnRlbnQuIEkgYnVpbGQgdGhlIGJsb2cgcGFnZSBmb3IgdGhlIHNpdGUgdXNpbmcgR2F0c2J5IHdpdGggc3RhdGljIHJlbmRlcmluZy4gXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChDZ1dvcmtBbHQpLFxuICAgIGRhdGU6IFwiMjAyMVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnVsbC1TdGFjayBEZXZlbG9wZXJcIixcbiAgICBsb2NhdGlvbjogXCJIZWxzaW5raSwgRmlubGFuZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJJ20gbm93IGEgZnVsbC1zdGFjayBkZXZlbG9wZXIgd29ya2luZyBvbiB0aGUgU01TIChTdHVkZW50IE1hbmFnZW1lbnQgU3lzdGVtKSBhIHdlYiBzZXJ2aWNlIGZvciBJbnRlZ3JpZnkncyByZWNydWl0ZXIgYW5kIHRlYWNoZXIgdG8gbWFuYWdlIHN0dWRlbnRzIGFuZCBjbGFzc2VzLCBkZXZlbG9wZWQgd2l0aCBSZWFjdCBmb3IgRnJvbnRlbmQgYW5kIE5lc3RKUyBmb3IgYmFja2VuZC5cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhUmVhY3QpLFxuICAgIGRhdGU6IFwiMjAyMSAtIHByZXNlbnRcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEaW9yIFdlYnNpdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJhbiBlLWNvbW1lcmNlXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJSZWR1eFwiLCBcIk1vbmdvREJcIl0sXG4gICAgaW1hZ2VVcmw6IGRpb3IsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIZWxzaW5raSBCaWtlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYmlrZVwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiVHlwZVNjcmlwdFwiLCBcIlJlZHV4XCIsIFwiRXhwcmVzc1wiLCBcIk1vbmdvQkRcIl0sXG4gICAgaW1hZ2VVcmw6IGJpa2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFLWNvbW1lcmNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYW5ndWxhclwiLFxuICAgIHRhZ3M6IFtcIkFuZ3VsYXJcIiwgXCJOZ1J4XCJdLFxuICAgIGltYWdlVXJsOiBjbG90aCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1lYWwgXCIsXG4gICAgZGVzY3JpcHRpb246IFwidnVlXCIsXG4gICAgdGFnczogW1wiVnVlXCJdLFxuICAgIGltYWdlVXJsOiBtZWFsLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHNraWxsc0RhdGEgPSBbXG4gIFwiSFRNTFwiLFxuICBcIkNTU1wiLFxuICBcIkphdmFTY3JpcHRcIixcbiAgXCJUeXBlU2NyaXB0XCIsXG4gIFwiUmVhY3RcIixcbiAgXCJBbmd1bGFyXCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIk5vZGUuanNcIixcbiAgXCJHaXRcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiUmVkdXhcIixcbiAgXCJFeHByZXNzXCIsXG4gIFwiUG9zdGdyZVNRTFwiLFxuICBcIlRlc3RpbmcgKEplc3QpXCIsXG4gIFwiRG9ja2VyXCIsXG4gIFwiRmlnbWFcIixcbl0gYXMgY29uc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDZ1dvcmtBbHQiLCJGYVJlYWN0IiwiTHVHcmFkdWF0aW9uQ2FwIiwiZGlvciIsImJpa2UiLCJjbG90aCIsIm1lYWwiLCJsaW5rcyIsIm5hbWUiLCJoYXNoIiwiZXhwZXJpZW5jZXNEYXRhIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwicHJvamVjdHNEYXRhIiwidGFncyIsImltYWdlVXJsIiwic2tpbGxzRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});