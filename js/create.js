import { postToyCars } from "./api.js";

let message = document.getElementById("alert");

let closeAlert = document.getElementById("close");

closeAlert.onclick = () => (message.style.display = "none");

window.onclick = () => (message.style.display = "none");

let form = document.forms["createToy"];
let newToy;

form.addEventListener("submit", function (event) {
  let ageGroup = document.forms["createToy"]["ageGroup"].value;
  let price = document.forms["createToy"]["price"].value;
  let color = document.forms["createToy"]["color"].value;
  let size = document.forms["createToy"]["size"].value;
  let doorCount = document.forms["createToy"]["doorCount"].value;
  let length = document.forms["createToy"]["length"].value;
  let material = document.forms["createToy"]["material"].value;

  let textError = "Oh snap! ";
  if (ageGroup > 18 || ageGroup < 0) {
    textError += "You entered incorect age! ";
  }
  if (price > 999999 || price < 0) {
    textError += "You entered incorect price of car! ";
  }
  if (doorCount > 10 || doorCount < 0) {
    textError += "You entered incorect number of door! ";
  }
  if (length > 10000 || length < 0) {
    textError += "You entered incorect length of car! ";
  }

  if (textError != "Oh snap! ") {
    event.preventDefault();
    message.style.display = "block";
    document.getElementById("stackTrace").innerHTML = textError;
    return;
  }

  newToy = {
    priceInUAH: price,
    ageGroup: ageGroup,
    size: size,
    color: color,
    doorCount: doorCount,
    lengthInMM: length,
    material: material,
  };

  postToyCars(newToy);
});
