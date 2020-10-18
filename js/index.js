let sourceToyList = [
  {
    priceInUAH: 120,
    ageGroup: "9",
    color: "red",
    size: "small",
    doorCount: "2",
    lengthInMM: "150",
    material: "steel",
    image: "images/rc-car-origin.svg",
  },
  {
    priceInUAH: 300,
    ageGroup: "9",
    color: "red",
    size: "medium",
    doorCount: "2",
    lengthInMM: "150",
    material: "steel",
    image: "images/rc-car-origin.svg",
  },
  {
    priceInUAH: 170,
    ageGroup: "9",
    color: "Blue",
    size: "small",
    doorCount: "4",
    lengthInMM: "120",
    material: "steel",
    image: "images/rc-car.svg",
  },
  {
    priceInUAH: 100,
    ageGroup: "6",
    color: "Blue",
    size: "small",
    doorCount: "2",
    lengthInMM: "80",
    material: "steel",
    image: "images/rc-car.svg",
  },
  {
    priceInUAH: 500,
    ageGroup: "9",
    color: "Blue",
    size: "medium",
    doorCount: "4",
    lengthInMM: "350",
    material: "steel",
    image: "images/rc-car.svg",
  },
  {
    priceInUAH: 85,
    ageGroup: "6",
    color: "red",
    size: "small",
    doorCount: "2",
    lengthInMM: "50",
    material: "steel",
    image: "images/rc-car-origin.svg",
  },
  {
    priceInUAH: 2000,
    ageGroup: "9",
    color: "Blue",
    size: "lerge",
    doorCount: "4",
    lengthInMM: "1600",
    material: "steel",
    image: "images/rc-car.svg",
  },
  {
    priceInUAH: 90,
    ageGroup: "3",
    color: "red",
    size: "small",
    doorCount: "4",
    lengthInMM: "70",
    material: "steel",
    image: "images/rc-car-origin.svg",
  },
  {
    priceInUAH: 450,
    ageGroup: "12",
    color: "Blue",
    size: "large",
    doorCount: "4",
    lengthInMM: "300",
    material: "steel",
    image: "images/rc-car.svg",
  },
];

var toyList = [...sourceToyList];

const vacancyItems = document.getElementById("vacancyItems");

var i = 0;

function sortElements() {
  if (i % 2 == 0) {
    toyList.sort(function (obj1, obj2) {
      return obj1.priceInUAH < obj2.priceInUAH ? -1 : 1;
    });
  } else {
    toyList.reverse();
  }
  i++;
  showVacancies(toyList);
}

function countPrice() {
  var totalPrice = 0;
  toyList.forEach((item) => {
    totalPrice += item.priceInUAH;
  });
  document.getElementById("total").innerHTML = totalPrice;
}

function findElements() {
  var sample = document.getElementById("findInput").value;
  var resultList = [];
  toyList.forEach((item) => {
    switch (sample) {
      case item.priceInUAH.toString():
        resultList.push(item);
        break;
      case item.ageGroup:
        resultList.push(item);
        break;
      case item.color:
        resultList.push(item);
        break;
      case item.size:
        resultList.push(item);
        break;
      case item.doorCount:
        resultList.push(item);
        break;
      case item.lengthInMM:
        resultList.push(item);
        break;
      case item.material:
        resultList.push(item);
        break;
    }
  });
  toyList = resultList;
  showVacancies(toyList);
}

function clearSerch() {
  document.getElementById("findInput").value = "";
  toyList = [...sourceToyList];
  showVacancies(toyList);
}

showVacancies(toyList);

function showVacancies(panlList) {
  let innerItem = "";
  panlList.forEach((item) => {
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
    <button class="edit">Edit</button>
    <button class="remove">Remove</button>
  </div>
</div>`;
  });

  vacancyItems.innerHTML = innerItem;
}
