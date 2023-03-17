/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst img = document.querySelector(\"img\");\r\nconst button = document.querySelector(\"button\");\r\nconst inInput = document.querySelector(\"input\");\r\nlet oldGif = \"\";\r\nlet gifLink = \"https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat\";\r\nfunction changeGif() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch(gifLink, { mode: \"cors\" })\r\n            .then(function (response) {\r\n            return response.json();\r\n        })\r\n            .then(function (response) {\r\n            if (img) {\r\n                let newGif = response.data.images.original.url;\r\n                if (newGif === oldGif) {\r\n                    return changeGif();\r\n                }\r\n                oldGif = response.data.images.original.url;\r\n                img.src = response.data.images.original.url;\r\n            }\r\n        });\r\n    });\r\n}\r\nchangeGif();\r\nbutton === null || button === void 0 ? void 0 : button.addEventListener(\"click\", () => {\r\n    if ((inInput === null || inInput === void 0 ? void 0 : inInput.value.trim()) === \"\") {\r\n        gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat`;\r\n    }\r\n    else {\r\n        gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=${inInput === null || inInput === void 0 ? void 0 : inInput.value}`;\r\n    }\r\n    changeGif();\r\n});\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;