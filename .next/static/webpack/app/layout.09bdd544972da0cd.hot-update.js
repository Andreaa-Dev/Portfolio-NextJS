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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa6 */ \"(app-client)/./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _images_dior_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dior.png */ \"(app-client)/./images/dior.png\");\n/* harmony import */ var _images_bike_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/bike.png */ \"(app-client)/./images/bike.png\");\n/* harmony import */ var _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cloth.png */ \"(app-client)/./images/cloth.png\");\n/* harmony import */ var _images_meal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/meal.png */ \"(app-client)/./images/meal.png\");\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"Full-Stack Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I'm now a full-stack developer working on the SMS (Student Management System) a web service for Integrify's recruiter and teacher to manage students and classes, developed with React for Frontend and NestJS for backend.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaReact),\n        date: \"2021 - present\"\n    },\n    {\n        title: \"Front-End Developer\",\n        location: \"Helsinki, Finland\",\n        description: \"I worked as a front-end developer for almost a year. My main task is to take over the maintenance of the restaurant's website by re-design and update the site content. I build the blog page for the site using Gatsby with static rendering. \",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__.RiGatsbyLine),\n        date: \"2021\"\n    },\n    {\n        title: \"Self-learning\",\n        location: \"Udemy online\",\n        description: \" some description\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa6__WEBPACK_IMPORTED_MODULE_7__.FaCode),\n        date: \"2019\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Dior Website\",\n        description: \"Fullstack Dior-inspired app with user authentication (Google OAuth), seamless cosmetics product checkout, order placement, and password reset via email confirmation using Sendgrid. \",\n        tags: [\n            \"React\",\n            \"Express\",\n            \"MongoDB\",\n            \"Stripe\",\n            \"Jest\",\n            \"Docker\"\n        ],\n        imageUrl: _images_dior_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Helsinki Bike\",\n        description: \"Full-stack app for exploring Helsinki bike stations and journeys via map view. Utilizes MongoDB with Bash scripting for CSV data import, employing pagination for millions of rows.\",\n        tags: [\n            \"React\",\n            \"Express\",\n            \"MongoBD\",\n            \"Redis\",\n            \"MapBox\",\n            \"Formik and Yup\",\n            \"Github Action\",\n            \"Docker \",\n            \"Jest\"\n        ],\n        imageUrl: _images_bike_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"E-commerce\",\n        description: \"An e-commerce website using Angular. The user can register/log in, add products to wishlist and buy product. The additional features are searching product by name, sorting by price and alphabet \",\n        tags: [\n            \"Angular\",\n            \"NgRx\"\n        ],\n        imageUrl: _images_cloth_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Meal \",\n        description: \"vue\",\n        tags: [\n            \"Vue\"\n        ],\n        imageUrl: _images_meal_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"TypeScript\",\n    \"JavaScript\",\n    \"React\",\n    \"Angular\",\n    \"Next.js\",\n    \"Node.js\",\n    \"Redux\",\n    \"Express\",\n    \"MongoDB\",\n    \"PostgreSQL\",\n    \"Testing (Jest)\",\n    \"Docker\",\n    \"GitHub Action\",\n    \"Bash\",\n    \"Figma\",\n    \"HTML\",\n    \"CSS\",\n    \"SASS\",\n    \"Git\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUVlO0FBRUs7QUFDTDtBQUVIO0FBQ0E7QUFDRTtBQUNGO0FBRS9CLE1BQU1RLFFBQVE7SUFDbkI7UUFDRUMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGtCQUFrQjtJQUM3QjtRQUNFQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNZiwwREFBbUIsQ0FBQ0MsbURBQU9BO1FBQ2pDZ0IsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWYsMERBQW1CLENBQUNFLHdEQUFZQTtRQUN0Q2UsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQWE7UUFDYkMsTUFBTWYsMERBQW1CLENBQUNHLG1EQUFNQTtRQUNoQ2MsTUFBTTtJQUNSO0NBQ0QsQ0FBVTtBQUVKLE1BQU1DLGVBQWU7SUFDMUI7UUFDRU4sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFTO1lBQVc7WUFBVztZQUFVO1lBQVE7U0FBUztRQUNqRUMsVUFBVWhCLHdEQUFJQTtJQUNoQjtJQUNBO1FBQ0VRLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQ0o7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsVUFBVWYsd0RBQUlBO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFXO1NBQU87UUFDekJDLFVBQVVkLHlEQUFLQTtJQUNqQjtJQUNBO1FBQ0VNLE9BQU87UUFDUEUsYUFBYTtRQUNiSyxNQUFNO1lBQUM7U0FBTTtRQUNiQyxVQUFVYix3REFBSUE7SUFDaEI7Q0FDRCxDQUFVO0FBRUosTUFBTWMsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2RhdGEudHM/MTZmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IEZhUmVhY3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEx1R3JhZHVhdGlvbkNhcCB9IGZyb20gXCJyZWFjdC1pY29ucy9sdVwiO1xuaW1wb3J0IHsgUmlHYXRzYnlMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XG5pbXBvcnQgeyBGYUNvZGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XG5cbmltcG9ydCBkaW9yIGZyb20gXCIuLi9pbWFnZXMvZGlvci5wbmdcIjtcbmltcG9ydCBiaWtlIGZyb20gXCIuLi9pbWFnZXMvYmlrZS5wbmdcIjtcbmltcG9ydCBjbG90aCBmcm9tIFwiLi4vaW1hZ2VzL2Nsb3RoLnBuZ1wiO1xuaW1wb3J0IG1lYWwgZnJvbSBcIi4uL2ltYWdlcy9tZWFsLnBuZ1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgICBoYXNoOiBcIiNob21lXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFib3V0XCIsXG4gICAgaGFzaDogXCIjYWJvdXRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUHJvamVjdHNcIixcbiAgICBoYXNoOiBcIiNwcm9qZWN0c1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTa2lsbHNcIixcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxuICAgIGhhc2g6IFwiI2V4cGVyaWVuY2VcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxuICAgIGhhc2g6IFwiI2NvbnRhY3RcIixcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJGdWxsLVN0YWNrIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhlbHNpbmtpLCBGaW5sYW5kXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkknbSBub3cgYSBmdWxsLXN0YWNrIGRldmVsb3BlciB3b3JraW5nIG9uIHRoZSBTTVMgKFN0dWRlbnQgTWFuYWdlbWVudCBTeXN0ZW0pIGEgd2ViIHNlcnZpY2UgZm9yIEludGVncmlmeSdzIHJlY3J1aXRlciBhbmQgdGVhY2hlciB0byBtYW5hZ2Ugc3R1ZGVudHMgYW5kIGNsYXNzZXMsIGRldmVsb3BlZCB3aXRoIFJlYWN0IGZvciBGcm9udGVuZCBhbmQgTmVzdEpTIGZvciBiYWNrZW5kLlwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFSZWFjdCksXG4gICAgZGF0ZTogXCIyMDIxIC0gcHJlc2VudFwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRnJvbnQtRW5kIERldmVsb3BlclwiLFxuICAgIGxvY2F0aW9uOiBcIkhlbHNpbmtpLCBGaW5sYW5kXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd29ya2VkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBmb3IgYWxtb3N0IGEgeWVhci4gTXkgbWFpbiB0YXNrIGlzIHRvIHRha2Ugb3ZlciB0aGUgbWFpbnRlbmFuY2Ugb2YgdGhlIHJlc3RhdXJhbnQncyB3ZWJzaXRlIGJ5IHJlLWRlc2lnbiBhbmQgdXBkYXRlIHRoZSBzaXRlIGNvbnRlbnQuIEkgYnVpbGQgdGhlIGJsb2cgcGFnZSBmb3IgdGhlIHNpdGUgdXNpbmcgR2F0c2J5IHdpdGggc3RhdGljIHJlbmRlcmluZy4gXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChSaUdhdHNieUxpbmUpLFxuICAgIGRhdGU6IFwiMjAyMVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU2VsZi1sZWFybmluZ1wiLFxuICAgIGxvY2F0aW9uOiBcIlVkZW15IG9ubGluZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIiBzb21lIGRlc2NyaXB0aW9uXCIsXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChGYUNvZGUpLFxuICAgIGRhdGU6IFwiMjAxOVwiLFxuICB9LFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkRpb3IgV2Vic2l0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJGdWxsc3RhY2sgRGlvci1pbnNwaXJlZCBhcHAgd2l0aCB1c2VyIGF1dGhlbnRpY2F0aW9uIChHb29nbGUgT0F1dGgpLCBzZWFtbGVzcyBjb3NtZXRpY3MgcHJvZHVjdCBjaGVja291dCwgb3JkZXIgcGxhY2VtZW50LCBhbmQgcGFzc3dvcmQgcmVzZXQgdmlhIGVtYWlsIGNvbmZpcm1hdGlvbiB1c2luZyBTZW5kZ3JpZC4gXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJFeHByZXNzXCIsIFwiTW9uZ29EQlwiLCBcIlN0cmlwZVwiLCBcIkplc3RcIiwgXCJEb2NrZXJcIl0sXG4gICAgaW1hZ2VVcmw6IGRpb3IsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIZWxzaW5raSBCaWtlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkZ1bGwtc3RhY2sgYXBwIGZvciBleHBsb3JpbmcgSGVsc2lua2kgYmlrZSBzdGF0aW9ucyBhbmQgam91cm5leXMgdmlhIG1hcCB2aWV3LiBVdGlsaXplcyBNb25nb0RCIHdpdGggQmFzaCBzY3JpcHRpbmcgZm9yIENTViBkYXRhIGltcG9ydCwgZW1wbG95aW5nIHBhZ2luYXRpb24gZm9yIG1pbGxpb25zIG9mIHJvd3MuXCIsXG4gICAgdGFnczogW1xuICAgICAgXCJSZWFjdFwiLFxuICAgICAgXCJFeHByZXNzXCIsXG4gICAgICBcIk1vbmdvQkRcIixcbiAgICAgIFwiUmVkaXNcIixcbiAgICAgIFwiTWFwQm94XCIsXG4gICAgICBcIkZvcm1payBhbmQgWXVwXCIsXG4gICAgICBcIkdpdGh1YiBBY3Rpb25cIixcbiAgICAgIFwiRG9ja2VyIFwiLFxuICAgICAgXCJKZXN0XCIsXG4gICAgXSxcbiAgICBpbWFnZVVybDogYmlrZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkUtY29tbWVyY2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQW4gZS1jb21tZXJjZSB3ZWJzaXRlIHVzaW5nIEFuZ3VsYXIuIFRoZSB1c2VyIGNhbiByZWdpc3Rlci9sb2cgaW4sIGFkZCBwcm9kdWN0cyB0byB3aXNobGlzdCBhbmQgYnV5IHByb2R1Y3QuIFRoZSBhZGRpdGlvbmFsIGZlYXR1cmVzIGFyZSBzZWFyY2hpbmcgcHJvZHVjdCBieSBuYW1lLCBzb3J0aW5nIGJ5IHByaWNlIGFuZCBhbHBoYWJldCBcIixcbiAgICB0YWdzOiBbXCJBbmd1bGFyXCIsIFwiTmdSeFwiXSxcbiAgICBpbWFnZVVybDogY2xvdGgsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZWFsIFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInZ1ZVwiLFxuICAgIHRhZ3M6IFtcIlZ1ZVwiXSxcbiAgICBpbWFnZVVybDogbWVhbCxcbiAgfSxcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xuICBcIlR5cGVTY3JpcHRcIixcbiAgXCJKYXZhU2NyaXB0XCIsXG4gIFwiUmVhY3RcIixcbiAgXCJBbmd1bGFyXCIsXG4gIFwiTmV4dC5qc1wiLFxuICBcIk5vZGUuanNcIixcbiAgXCJSZWR1eFwiLFxuICBcIkV4cHJlc3NcIixcbiAgXCJNb25nb0RCXCIsXG4gIFwiUG9zdGdyZVNRTFwiLFxuICBcIlRlc3RpbmcgKEplc3QpXCIsXG4gIFwiRG9ja2VyXCIsXG4gIFwiR2l0SHViIEFjdGlvblwiLFxuICBcIkJhc2hcIixcbiAgXCJGaWdtYVwiLFxuICBcIkhUTUxcIixcbiAgXCJDU1NcIixcbiAgXCJTQVNTXCIsXG4gIFwiR2l0XCIsXG5dIGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFSZWFjdCIsIlJpR2F0c2J5TGluZSIsIkZhQ29kZSIsImRpb3IiLCJiaWtlIiwiY2xvdGgiLCJtZWFsIiwibGlua3MiLCJuYW1lIiwiaGFzaCIsImV4cGVyaWVuY2VzRGF0YSIsInRpdGxlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImljb24iLCJjcmVhdGVFbGVtZW50IiwiZGF0ZSIsInByb2plY3RzRGF0YSIsInRhZ3MiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});