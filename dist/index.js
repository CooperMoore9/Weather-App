"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const img = document.querySelector("img");
const button = document.querySelector("button");
const inInput = document.querySelector("input");
let oldGif = "";
let gifLink = "https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat";
function changeGif() {
    fetch(gifLink, { mode: "cors" })
        .then(function (response) {
        return response.json();
    })
        .then(function (response) {
        if (img) {
            let newGif = response.data.images.original.url;
            if (newGif === oldGif) {
                return changeGif();
            }
            oldGif = response.data.images.original.url;
            img.src = response.data.images.original.url;
        }
    });
}
changeGif();
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    if ((inInput === null || inInput === void 0 ? void 0 : inInput.value.trim()) === "") {
        gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat`;
    }
    else {
        gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=${inInput === null || inInput === void 0 ? void 0 : inInput.value}`;
    }
    changeGif();
});
