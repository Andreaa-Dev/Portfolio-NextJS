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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa6 */ \"(app-client)/./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _images_dior_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dior.png */ \"(app-client)/./images/dior.png\");\n/* harmony import */ var _images_bike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bike.png */ \"(app-client)/./images/bike.png\");\n/* harmony import */ var _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cloth.png */ \"(app-client)/./images/cloth.png\");\n/* harmony import */ var _images_meal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/meal.png */ \"(app-client)/./images/meal.png\");\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaReact),\n        date: \"2021 - present\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiGatsbyLine),\n        date: \"2021\"\n    },\n    {\n        title: \"Self-learning\",\n        location: \"Udemy online\",\n        description: \" some description\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaCode),\n        date: \"2019\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Dior Website\",\n        description: \"Fullstack Dior-inspired app with user authentication (Google OAuth), seamless cosmetics product checkout, order placement, and password reset via email confirmation using Sendgrid. \",\n        tags: [\n            \"React\",\n            \"Express\",\n            \"MongoDB\",\n            \"Stripe\",\n            \"Jest\",\n            \"Docker\"\n        ],\n        imageUrl: _images_dior_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Helsinki Bike\",\n        description: \"Full-stack app for exploring Helsinki bike stations and journeys via map view. Utilizes MongoDB with Bash scripting for CSV data import, employing pagination for millions of rows.\",\n        tags: [\n            \"React\",\n            \"Redis\",\n            \"MapBox\",\n            \"Github Action\",\n            \"Docker \"\n        ],\n        imageUrl: _images_bike_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"E-commerce\",\n        description: \"An e-commerce website using Angular. The user can register/log in, add products to wishlist and buy product. The additional features are searching product by name, sorting by price and alphabet \",\n        tags: [\n            \"Angular\",\n            \"NgRx\",\n            \"Tailwind\"\n        ],\n        imageUrl: _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Meal \",\n        description: \"A front-end project displays receipt for meals. The user can choose by name or ingredients\",\n        tags: [\n            \"Vue\",\n            \"Tailwind\"\n        ],\n        imageUrl: _images_meal_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"TypeScript\",\n    \"JavaScript\",\n    \"React\",\n    \"Angular\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Redux\",\n    \"Express\",\n    \"MongoDB\",\n    \"PostgreSQL\",\n    \"Testing (Jest)\",\n    \"Docker\",\n    \"GitHub Action\",\n    \"Bash\",\n    \"Figma\",\n    \"HTML\",\n    \"CSS\",\n    \"SASS\",\n    \"Git\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVlO0FBRUs7QUFDTDtBQUVIO0FBQ0E7QUFDRTtBQUNGO0FBRS9CLE1BQU1RLFFBQVE7SUFDbkI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGtCQUFrQjtJQUM3QjtRQUNFQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNZiwwREFBbUIsQ0FBQ0MsbURBQU9BO1FBQ2pDZ0IsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWYsMERBQW1CLENBQUNFLHdEQUFZQTtRQUN0Q2UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTWYsMERBQW1CLENBQUNHLG1EQUFNQTtRQUNoQ2MsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBVztZQUFVO1lBQVE7U0FBUztRQUNqRUMsVUFBVWhCLHdEQUFJQTtJQUNoQjtJQUNBO1FBQ0VRLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBUztZQUFTO1lBQVU7WUFBaUI7U0FBVTtRQUM5REMsVUFBVWYsd0RBQUlBO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFXO1lBQVE7U0FBVztRQUNyQ0MsVUFBVWQseURBQUtBO0lBQ2pCO0lBQ0E7UUFDRU0sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFPO1NBQVc7UUFDekJDLFVBQVViLHdEQUFJQTtJQUNoQjtDQUNELENBQVU7QUFFSixNQUFNYyxhQUFhO0lBQ3hCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvZGF0YS50cz8xNmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENnV29ya0FsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jZ1wiO1xuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgTHVHcmFkdWF0aW9uQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2x1XCI7XG5pbXBvcnQgeyBSaUdhdHNieUxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcbmltcG9ydCB7IEZhQ29kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuaW1wb3J0IGRpb3IgZnJvbSBcIi4uL2ltYWdlcy9kaW9yLnBuZ1wiO1xuaW1wb3J0IGJpa2UgZnJvbSBcIi4uL2ltYWdlcy9iaWtlLnBuZ1wiO1xuaW1wb3J0IGNsb3RoIGZyb20gXCIuLi9pbWFnZXMvY2xvdGgucG5nXCI7XG5pbXBvcnQgbWVhbCBmcm9tIFwiLi4vaW1hZ2VzL21lYWwucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiSG9tZVwiLFxuICAgIGhhc2g6IFwiI2hvbWVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWJvdXRcIixcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxuICAgIGhhc2g6IFwiI3Byb2plY3RzXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNraWxsc1wiLFxuICAgIGhhc2g6IFwiI3NraWxsc1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFeHBlcmllbmNlXCIsXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDb250YWN0XCIsXG4gICAgaGFzaDogXCIjY29udGFjdFwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2VzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkZ1bGwtU3RhY2sgRGV2ZWxvcGVyXCIsXG4gICAgbG9jYXRpb246IFwiSGVsc2lua2ksIEZpbmxhbmRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSdtIG5vdyBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyIHdvcmtpbmcgb24gdGhlIFNNUyAoU3R1ZGVudCBNYW5hZ2VtZW50IFN5c3RlbSkgYSB3ZWIgc2VydmljZSBmb3IgSW50ZWdyaWZ5J3MgcmVjcnVpdGVyIGFuZCB0ZWFjaGVyIHRvIG1hbmFnZSBzdHVkZW50cyBhbmQgY2xhc3NlcywgZGV2ZWxvcGVkIHdpdGggUmVhY3QgZm9yIEZyb250ZW5kIGFuZCBOZXN0SlMgZm9yIGJhY2tlbmQuXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYVJlYWN0KSxcbiAgICBkYXRlOiBcIjIwMjEgLSBwcmVzZW50XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJGcm9udC1FbmQgRGV2ZWxvcGVyXCIsXG4gICAgbG9jYXRpb246IFwiSGVsc2lua2ksIEZpbmxhbmRcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSSB3b3JrZWQgYXMgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGZvciBhbG1vc3QgYSB5ZWFyLiBNeSBtYWluIHRhc2sgaXMgdG8gdGFrZSBvdmVyIHRoZSBtYWludGVuYW5jZSBvZiB0aGUgcmVzdGF1cmFudCdzIHdlYnNpdGUgYnkgcmUtZGVzaWduIGFuZCB1cGRhdGUgdGhlIHNpdGUgY29udGVudC4gSSBidWlsZCB0aGUgYmxvZyBwYWdlIGZvciB0aGUgc2l0ZSB1c2luZyBHYXRzYnkgd2l0aCBzdGF0aWMgcmVuZGVyaW5nLiBcIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFJpR2F0c2J5TGluZSksXG4gICAgZGF0ZTogXCIyMDIxXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTZWxmLWxlYXJuaW5nXCIsXG4gICAgbG9jYXRpb246IFwiVWRlbXkgb25saW5lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiIHNvbWUgZGVzY3JpcHRpb25cIixcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhQ29kZSksXG4gICAgZGF0ZTogXCIyMDE5XCIsXG4gIH0sXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRGlvciBXZWJzaXRlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZ1bGxzdGFjayBEaW9yLWluc3BpcmVkIGFwcCB3aXRoIHVzZXIgYXV0aGVudGljYXRpb24gKEdvb2dsZSBPQXV0aCksIHNlYW1sZXNzIGNvc21ldGljcyBwcm9kdWN0IGNoZWNrb3V0LCBvcmRlciBwbGFjZW1lbnQsIGFuZCBwYXNzd29yZCByZXNldCB2aWEgZW1haWwgY29uZmlybWF0aW9uIHVzaW5nIFNlbmRncmlkLiBcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkV4cHJlc3NcIiwgXCJNb25nb0RCXCIsIFwiU3RyaXBlXCIsIFwiSmVzdFwiLCBcIkRvY2tlclwiXSxcbiAgICBpbWFnZVVybDogZGlvcixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkhlbHNpbmtpIEJpa2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRnVsbC1zdGFjayBhcHAgZm9yIGV4cGxvcmluZyBIZWxzaW5raSBiaWtlIHN0YXRpb25zIGFuZCBqb3VybmV5cyB2aWEgbWFwIHZpZXcuIFV0aWxpemVzIE1vbmdvREIgd2l0aCBCYXNoIHNjcmlwdGluZyBmb3IgQ1NWIGRhdGEgaW1wb3J0LCBlbXBsb3lpbmcgcGFnaW5hdGlvbiBmb3IgbWlsbGlvbnMgb2Ygcm93cy5cIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlJlZGlzXCIsIFwiTWFwQm94XCIsIFwiR2l0aHViIEFjdGlvblwiLCBcIkRvY2tlciBcIl0sXG4gICAgaW1hZ2VVcmw6IGJpa2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJFLWNvbW1lcmNlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFuIGUtY29tbWVyY2Ugd2Vic2l0ZSB1c2luZyBBbmd1bGFyLiBUaGUgdXNlciBjYW4gcmVnaXN0ZXIvbG9nIGluLCBhZGQgcHJvZHVjdHMgdG8gd2lzaGxpc3QgYW5kIGJ1eSBwcm9kdWN0LiBUaGUgYWRkaXRpb25hbCBmZWF0dXJlcyBhcmUgc2VhcmNoaW5nIHByb2R1Y3QgYnkgbmFtZSwgc29ydGluZyBieSBwcmljZSBhbmQgYWxwaGFiZXQgXCIsXG4gICAgdGFnczogW1wiQW5ndWxhclwiLCBcIk5nUnhcIiwgXCJUYWlsd2luZFwiXSxcbiAgICBpbWFnZVVybDogY2xvdGgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZWFsIFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGZyb250LWVuZCBwcm9qZWN0IGRpc3BsYXlzIHJlY2VpcHQgZm9yIG1lYWxzLiBUaGUgdXNlciBjYW4gY2hvb3NlIGJ5IG5hbWUgb3IgaW5ncmVkaWVudHNcIixcbiAgICB0YWdzOiBbXCJWdWVcIiwgXCJUYWlsd2luZFwiXSxcbiAgICBpbWFnZVVybDogbWVhbCxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiUmVhY3RcIixcbiAgXCJBbmd1bGFyXCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIk5vZGUuanNcIixcbiAgXCJSZWR1eFwiLFxuICBcIkV4cHJlc3NcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiUG9zdGdyZVNRTFwiLFxuICBcIlRlc3RpbmcgKEplc3QpXCIsXG4gIFwiRG9ja2VyXCIsXG4gIFwiR2l0SHViIEFjdGlvblwiLFxuICBcIkJhc2hcIixcbiAgXCJGaWdtYVwiLFxuICBcIkhUTUxcIixcbiAgXCJDU1NcIixcbiAgXCJTQVNTXCIsXG4gIFwiR2l0XCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFSZWFjdCIsIlJpR2F0c2J5TGluZSIsIkZhQ29kZSIsImRpb3IiLCJiaWtlIiwiY2xvdGgiLCJtZWFsIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});