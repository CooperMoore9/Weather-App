import { stringify } from "postcss";

const img = document.querySelector("img");
const button = document.querySelector("button");
const inInput = document.querySelector("input");
let oldGif: string = "";
let gifLink =
  "https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat";

async function changeGif() {
  const response = await fetch(gifLink, { mode: "cors" })
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

button?.addEventListener("click", () => {
  if (inInput?.value.trim() === "") {
    gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cat`;
  } else {
    gifLink = `https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=${inInput?.value}`;
  }
  changeGif();
});
