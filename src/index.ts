import { stringify } from "postcss";

const button = document.querySelector("button");
const inInput = document.querySelector("input");
let tempData = document.querySelector(".temp");
let location = document.querySelector(".location");
let notValid = document.querySelector(".notValid");

let weatherLink =
  "https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5";

async function getWeatherData() {
  return await fetch(weatherLink, { mode: "cors" }).then(function (response) {
    if (response.ok === true) {
      return response.json();
    }
    throw new Error();
  });
}

async function changeData() {
  try {
    const data = await getWeatherData();
    location!.textContent = data.name;
    tempData!.textContent = `${data.main.temp} °F`;
    notValid!.textContent = "";
    console.log(data);
  } catch {
    notValid!.textContent = "Not a valid location";
  }
}

button?.addEventListener("click", () => {
  if (inInput?.value.trim() === "") {
    weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=Lubbock&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;
  } else {
    weatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${inInput?.value}&units=imperial&APPID=7368db32d621614591afabd530b3c6d5`;
    changeData();
  }
});

changeData();
