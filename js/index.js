import { getAllToyCars, deleteToyCar } from "./api.js";

let toyList;
let sourceToyList;

const addElement = async () => {
  const toyCars = await getAllToyCars();
  console.log(toyCars);
  toyList = toyCars;
  sourceToyList = toyCars;

  showToys(toyList);
  addEvent();
};
addElement();
console.log(toyList);

const elementsContainer = document.getElementById("elementsContainer");
const sortElement = document.getElementById("sortElement");
const findElement = document.getElementById("findInput");
const countPrice = document.getElementById("countPrice");

var i = 0;
sortElement.onclick = () => {
  if (i == 0) {
    toyList.sort(function (obj1, obj2) {
      return obj1.priceInUAH < obj2.priceInUAH ? -1 : 1;
    });
  } else {
    toyList.reverse();
  }
  i++;
  showToys(toyList);
  addEvent();
};

countPrice.onclick = () => {
  var totalPrice = 0;
  toyList.forEach((item) => {
    totalPrice += item.priceInUAH;
  });
  document.getElementById("total").innerHTML = totalPrice;
};

findElement.oninput = () => {
  toyList = sourceToyList;
  var sample = document.getElementById("findInput").value;
  var resultList = [];
  toyList.forEach((item) => {
    switch (true) {
      case item.priceInUAH.toString().includes(sample):
        resultList.push(item);
        break;
      case item.ageGroup.toString().includes(sample):
        resultList.push(item);
        break;
      case item.color.includes(sample):
        resultList.push(item);
        break;
      case item.size.includes(sample):
        resultList.push(item);
        break;
      case item.doorCount.toString().includes(sample):
        resultList.push(item);
        break;
      case item.lengthInMM.toString().includes(sample):
        resultList.push(item);
        break;
      case item.material.includes(sample):
        resultList.push(item);
        break;
    }
  });
  toyList = resultList;
  if (sample == "") {
    toyList = sourceToyList;
  }
  showToys(toyList);
  addEvent();
};

const showToys = (panlList) => {
  let innerItem = "";
  panlList.forEach((item) => {
    innerItem += `
      <div  class="element">
  <img class="element__image" src="images/rc-car${item.id % 2}.svg" alt="" />
  <h1 class="element__name">Toy Car</h1>
  <div class="description">
    <p>For age group: ${item.ageGroup}</p>
    <p>Price: ${item.priceInUAH} UAH</p>
    <p>Color: ${item.color}</p>
    <p>Size: ${item.size}</p>
    <p>Door Count: ${item.doorCount}</p>
    <p>Length: ${item.lengthInMM} mm</p>
    <p>Material: ${item.material}</p>
  </div>
  <h3 class="element__updated">Last time updated: 10.04.2020</h3>
  <div class="element__change-controls">
    <button  id ="edit-button${item.id}" class="edit">Edit</button>
    <button id ="remove-button${item.id}" class="remove">Remove</button>
  </div>
</div>`;
  });

  elementsContainer.innerHTML = innerItem;
};

const goToEdit = (e) => {
  const id = e.target.id.replace("edit-button", "");
  window.location = "/edit.html?toyId=" + id;
};
const removeElement = (e) => {
  console.log(e);
  const id = e.target.id.replace("remove-button", "");
  deleteToyCar(id).then(addElement);
};

const addEvent = () => {
  toyList.forEach((item) => {
    const removebtn = document.getElementById(`remove-button${item.id}`);
    const editbtn = document.getElementById(`edit-button${item.id}`);
    console.log({ removebtn });
    removebtn.addEventListener("click", removeElement);
    editbtn.addEventListener("click", goToEdit);
  });
};
