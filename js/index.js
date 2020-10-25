// let sourceToyList = JSON.parse(localStorage.getItem("SourceToyList"));
addElement();
// localStorage.removeItem("newToy");
function addElement() {
  sourceToyList = JSON.parse(localStorage.getItem("SourceToyList"));
  let newToy = JSON.parse(localStorage.getItem("NewToy"));
  if (newToy != null) {
    sourceToyList = sourceToyList.concat(newToy);
  }

  localStorage.removeItem("NewToy");

  localStorage.setItem("SourceToyList", JSON.stringify(sourceToyList));
}

var toyList = [...sourceToyList];
const elementsContainer = document.getElementById("elementsContainer");

var i = 0;

function sortElements() {
  if (i == 0) {
    toyList.sort(function (obj1, obj2) {
      return obj1.priceInUAH < obj2.priceInUAH ? -1 : 1;
    });
  } else {
    toyList.reverse();
  }
  i++;
  showToys(toyList);
}

function countPrice() {
  var totalPrice = 0;
  toyList.forEach((item) => {
    totalPrice += item.priceInUAH;
  });
  document.getElementById("total").innerHTML = totalPrice;
}

function findElements() {
  toyList = sourceToyList;
  var sample = document.getElementById("findInput").value;
  var resultList = [];
  toyList.forEach((item) => {
    switch (true) {
      case item.priceInUAH.toString().includes(sample):
        resultList.push(item);
        break;
      case item.ageGroup.includes(sample):
        resultList.push(item);
        break;
      case item.color.includes(sample):
        resultList.push(item);
        break;
      case item.size.includes(sample):
        resultList.push(item);
        break;
      case item.doorCount.includes(sample):
        resultList.push(item);
        break;
      case item.lengthInMM.includes(sample):
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
}

showToys(toyList);

function showToys(panlList) {
  let innerItem = "";
  panlList.forEach((item, index) => {
    innerItem += `
      <div class="element">
  <img class="element__image" src=${item.image} alt="" />
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
    <button onclick="goToEdit(${index})" class="edit">Edit</button>
    <button onclick="removeElement(${index})" class="remove">Remove</button>
  </div>
</div>`;
  });

  elementsContainer.innerHTML = innerItem;
}

function removeElement(index) {
  sourceToyList.splice(index, 1);
  toyList.splice(index, 1);
  showToys(toyList);
  localStorage.setItem("SourceToyList", JSON.stringify(sourceToyList));
}

function goToEdit(index) {
  window.location = "/edit.html?index=" + index;
}
