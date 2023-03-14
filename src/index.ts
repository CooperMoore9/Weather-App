const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=4jBwtMTcHcjtcz6kOTYYnzUgHQOKa3HX&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.data.images.original.url);
    if (img) img.src = response.data.images.original.url;
  });
