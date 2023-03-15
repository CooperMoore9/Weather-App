import { stringify } from "postcss";

const img = document.querySelector("img");
let oldGif: string = "";
const button = document.querySelector("button");

function changeGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=loop",
    { mode: "cors" }
  )
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
  changeGif();
});
