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

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst button = document.querySelector(\"button\");\r\nconst inInput = document.querySelector(\"input\");\r\nlet tempData = document.querySelector(\".temp\");\r\nlet location = document.querySelector(\".location\");\r\nlet notValid = document.querySelector(\".notValid\");\r\nlet weatherLink = \"https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5\";\r\nfunction getWeatherData() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        return yield fetch(weatherLink, { mode: \"cors\" }).then(function (response) {\r\n            if (response.ok === true) {\r\n                return response.json();\r\n            }\r\n            throw new Error();\r\n        });\r\n    });\r\n}\r\nfunction changeData() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const data = yield getWeatherData();\r\n            location.textContent = data.name;\r\n            tempData.textContent = `${data.main.temp} °F`;\r\n            notValid.textContent = \"\";\r\n            console.log(data);\r\n        }\r\n        catch (_a) {\r\n            notValid.textContent = \"Not a valid location\";\r\n        }\r\n    });\r\n}\r\nbutton === null || button === void 0 ? void 0 : button.addEventListener(\"click\", () => {\r\n    if ((inInput === null || inInput === void 0 ? void 0 : inInput.value.trim()) === \"\") {\r\n        weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;\r\n    }\r\n    else {\r\n        weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inInput === null || inInput === void 0 ? void 0 : inInput.value}&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;\r\n        changeData();\r\n    }\r\n});\r\nchangeData();\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.ts?");

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