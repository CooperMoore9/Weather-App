"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const button = document.querySelector("button");
const inInput = document.querySelector("input");
let tempData = document.querySelector(".temp");
let location = document.querySelector(".location");
let notValid = document.querySelector(".notValid");
let weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5";
function getWeatherData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(weatherLink, { mode: "cors" }).then(function (response) {
            if (response.ok === true) {
                return response.json();
            }
            throw new Error();
        });
    });
}
function changeData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield getWeatherData();
            location.textContent = data.name;
            tempData.textContent = `${data.main.temp} °F`;
            notValid.textContent = "";
            console.log(data);
        }
        catch (_a) {
            notValid.textContent = "Not a valid location";
        }
    });
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    if ((inInput === null || inInput === void 0 ? void 0 : inInput.value.trim()) === "") {
        weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;
    }
    else {
        weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inInput === null || inInput === void 0 ? void 0 : inInput.value}&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;
        changeData();
    }
});
changeData();
