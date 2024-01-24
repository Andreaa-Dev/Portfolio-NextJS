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

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _images_dior_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dior.png */ \"(app-client)/./images/dior.png\");\n/* harmony import */ var _images_bike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bike.png */ \"(app-client)/./images/bike.png\");\n/* harmony import */ var _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cloth.png */ \"(app-client)/./images/cloth.png\");\n/* harmony import */ var _images_meal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/meal.png */ \"(app-client)/./images/meal.png\");\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Self-learning\",\n        location: \"Udemy online\",\n        description: \" some description\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_5__.LuGraduationCap),\n        date: \"2019\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__.CgWorkAlt),\n        date: \"2021\"\n    },\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaReact),\n        date: \"2021 - present\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Dior Website\",\n        description: \"an e-commerce\",\n        tags: [\n            \"React\",\n            \"Redux\",\n            \"MongoDB\"\n        ],\n        imageUrl: _images_dior_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Helsinki Bike\",\n        description: \"bike\",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Redux\",\n            \"Express\",\n            \"MongoBD\"\n        ],\n        imageUrl: _images_bike_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"E-commerce\",\n        description: \"angular\",\n        tags: [\n            \"Angular\",\n            \"NgRx\"\n        ],\n        imageUrl: _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Meal \",\n        description: \"vue\",\n        tags: [\n            \"Vue\"\n        ],\n        imageUrl: _images_meal_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"HTML\",\n    \"CSS\",\n    \"JavaScript\",\n    \"TypeScript\",\n    \"React\",\n    \"Angular\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Git\",\n    \"MongoDB\",\n    \"Redux\",\n    \"Express\",\n    \"PostgreSQL\",\n    \"Testing (Jest)\",\n    \"Docker\",\n    \"Figma\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNGO0FBQ1E7QUFDWDtBQUNBO0FBQ0U7QUFDRjtBQUUvQixNQUFNUSxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTWYsMERBQW1CLENBQUNHLDJEQUFlQTtRQUN6Q2MsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWYsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ2dCLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1mLDBEQUFtQixDQUFDRSxtREFBT0E7UUFDakNlLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxlQUFlO0lBQzFCO1FBQ0VOLE9BQU87UUFDUEUsYUFBYTtRQUNiSyxNQUFNO1lBQUM7WUFBUztZQUFTO1NBQVU7UUFDbkNDLFVBQVVoQix3REFBSUE7SUFDaEI7SUFDQTtRQUNFUSxPQUFPO1FBQ1BFLGFBQWE7UUFDYkssTUFBTTtZQUFDO1lBQVM7WUFBYztZQUFTO1lBQVc7U0FBVTtRQUM1REMsVUFBVWYsd0RBQUlBO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQRSxhQUFhO1FBQ2JLLE1BQU07WUFBQztZQUFXO1NBQU87UUFDekJDLFVBQVVkLHlEQUFLQTtJQUNqQjtJQUNBO1FBQ0VNLE9BQU87UUFDUEUsYUFBYTtRQUNiSyxNQUFNO1lBQUM7U0FBTTtRQUNiQyxVQUFVYix3REFBSUE7SUFDaEI7Q0FDRCxDQUFVO0FBRUosTUFBTWMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IEZhUmVhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuaW1wb3J0IGRpb3IgZnJvbSBcIi4uL2ltYWdlcy9kaW9yLnBuZ1wiO1xuaW1wb3J0IGJpa2UgZnJvbSBcIi4uL2ltYWdlcy9iaWtlLnBuZ1wiO1xuaW1wb3J0IGNsb3RoIGZyb20gXCIuLi9pbWFnZXMvY2xvdGgucG5nXCI7XG5pbXBvcnQgbWVhbCBmcm9tIFwiLi4vaW1hZ2VzL21lYWwucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNlbGYtbGVhcm5pbmdcIixcbiAgICBsb2NhdGlvbjogXCJVZGVteSBvbmxpbmVcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgc29tZSBkZXNjcmlwdGlvblwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTHVHcmFkdWF0aW9uQ2FwKSxcbiAgICBkYXRlOiBcIjIwMTlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZyb250LUVuZCBEZXZlbG9wZXJcIixcbiAgICBsb2NhdGlvbjogXCJIZWxzaW5raSwgRmlubGFuZFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJJIHdvcmtlZCBhcyBhIGZyb250LWVuZCBkZXZlbG9wZXIgZm9yIGFsbW9zdCBhIHllYXIuIE15IG1haW4gdGFzayBpcyB0byB0YWtlIG92ZXIgdGhlIG1haW50ZW5hbmNlIG9mIHRoZSByZXN0YXVyYW50J3Mgd2Vic2l0ZSBieSByZS1kZXNpZ24gYW5kIHVwZGF0ZSB0aGUgc2l0ZSBjb250ZW50LiBJIGJ1aWxkIHRoZSBibG9nIHBhZ2UgZm9yIHRoZSBzaXRlIHVzaW5nIEdhdHNieSB3aXRoIHN0YXRpYyByZW5kZXJpbmcuIFwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcbiAgICBkYXRlOiBcIjIwMjFcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkZ1bGwtU3RhY2sgRGV2ZWxvcGVyXCIsXG4gICAgbG9jYXRpb246IFwiSGVsc2lua2ksIEZpbmxhbmRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIG5vdyBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIHdvcmtpbmcgb24gdGhlIFNNUyAoU3R1ZGVudCBNYW5hZ2VtZW50IFN5c3RlbSkgYSB3ZWIgc2VydmljZSBmb3IgSW50ZWdyaWZ5J3MgcmVjcnVpdGVyIGFuZCB0ZWFjaGVyIHRvIG1hbmFnZSBzdHVkZW50cyBhbmQgY2xhc3NlcywgZGV2ZWxvcGVkIHdpdGggUmVhY3QgZm9yIEZyb250ZW5kIGFuZCBOZXN0SlMgZm9yIGJhY2tlbmQuXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYVJlYWN0KSxcbiAgICBkYXRlOiBcIjIwMjEgLSBwcmVzZW50XCIsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGlvciBXZWJzaXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiYW4gZS1jb21tZXJjZVwiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJNb25nb0RCXCJdLFxuICAgIGltYWdlVXJsOiBkaW9yLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGVsc2lua2kgQmlrZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImJpa2VcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJSZWR1eFwiLCBcIkV4cHJlc3NcIiwgXCJNb25nb0JEXCJdLFxuICAgIGltYWdlVXJsOiBiaWtlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRS1jb21tZXJjZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcImFuZ3VsYXJcIixcbiAgICB0YWdzOiBbXCJBbmd1bGFyXCIsIFwiTmdSeFwiXSxcbiAgICBpbWFnZVVybDogY2xvdGgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZWFsIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInZ1ZVwiLFxuICAgIHRhZ3M6IFtcIlZ1ZVwiXSxcbiAgICBpbWFnZVVybDogbWVhbCxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIkhUTUxcIixcbiAgXCJDU1NcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiVHlwZVNjcmlwdFwiLFxuICBcIlJlYWN0XCIsXG4gIFwiQW5ndWxhclwiLFxuICBcIk5leHQuanNcIixcbiAgXCJOb2RlLmpzXCIsXG4gIFwiR2l0XCIsXG4gIFwiTW9uZ29EQlwiLFxuICBcIlJlZHV4XCIsXG4gIFwiRXhwcmVzc1wiLFxuICBcIlBvc3RncmVTUUxcIixcbiAgXCJUZXN0aW5nIChKZXN0KVwiLFxuICBcIkRvY2tlclwiLFxuICBcIkZpZ21hXCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2dXb3JrQWx0IiwiRmFSZWFjdCIsIkx1R3JhZHVhdGlvbkNhcCIsImRpb3IiLCJiaWtlIiwiY2xvdGgiLCJtZWFsIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});