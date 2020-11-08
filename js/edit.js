import { updateToyCars, getToyCar } from "./api.js";

let index;

let ageGroup = document.forms["createToy"]["ageGroup"];
let price = document.forms["createToy"]["price"];
let color = document.forms["createToy"]["color"];
let size = document.forms["createToy"]["size"];
let doorCount = document.forms["createToy"]["doorCount"];
let length = document.forms["createToy"]["length"];
let material = document.forms["createToy"]["material"];

window.onload = async () => {
  let url = document.location.href;
  index = url.split("?")[1].split("=")[1];

  const item = await getToyCar(index);

  ageGroup.value = item.ageGroup;
  price.value = item.priceInUAH;
  color.value = item.color;
  size.value = item.size;
  doorCount.value = item.doorCount;
  length.value = item.lengthInMM;
  material.value = item.material;
};

let message = document.getElementById("alert");

let closeAlert = document.getElementById("close");

closeAlert.onclick = () => (message.style.display = "none");

window.onclick = () => (message.style.display = "none");

let form = document.forms["createToy"];
let newToy;

form.addEventListener("submit", function (event) {
  let inputAgeGroup = ageGroup.value;
  let inputPrice = price.value;
  let inputColor = color.value;
  let inputSize = size.value;
  let inputDoorCount = doorCount.value;
  let inputLength = length.value;
  let inputMaterial = material.value;

  let textError = "Oh snap! ";
  if (inputAgeGroup > 18 || inputAgeGroup < 0) {
    textError += "You entered incorect age! ";
  }
  if (inputPrice > 999999 || inputPrice < 0) {
    textError += "You entered incorect price of car! ";
  }
  if (inputDoorCount > 10 || inputDoorCount < 0) {
    textError += "You entered incorect number of door! ";
  }
  if (inputLength > 10000 || inputLength < 0) {
    textError += "You entered incorect length of car! ";
  }

  if (textError != "Oh snap! ") {
    event.preventDefault();
    message.style.display = "block";
    document.getElementById("stackTrace").innerHTML = textError;
    return;
  }

  newToy = {
    priceInUAH: inputPrice,
    ageGroup: inputAgeGroup,
    color: inputColor,
    size: inputSize,
    doorCount: inputDoorCount,
    lengthInMM: inputLength,
    material: inputMaterial,
  };

  updateToyCars(index, newToy);
});
