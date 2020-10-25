let index;

window.onload = () => {
  let url = document.location.href;
  index = url.split("?")[1].split("=")[1];
};

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
    priceInUAH: parseInt(price),
    ageGroup: ageGroup,
    color: color,
    size: size,
    doorCount: doorCount,
    lengthInMM: length,
    material: material,
    image: "images/rc-car.svg",
  };

  toys = JSON.parse(localStorage.getItem("SourceToyList"));
  toys[index] = newToy;
  console.log(toys, index);
  localStorage.setItem("SourceToyList", JSON.stringify(toys));
});
