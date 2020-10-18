let panelList = [
  { name: "Designer" },
  { name: "Team lead" },
  { name: "UX-dev" },
  { name: "Front-en" },
];

const vacancyItems = document.getElementById("vacancyItems");

let localList = localStorage.getItem("localVacancies");

localStorage.setItem("localVacancies", JSON.stringify(panelList));

// sort

// sortNames.onclick = function () {
//   panelList.sort(function (obj1, obj2) {
//     if (obj1.name < obj2.name) return -1;
//     if (obj1.name > obj2.name) return 1;
//     return 0;
//   });
// };

// render-func

showVacancies();

function showVacancies() {
  let innerItem = "";
  panelList.forEach((item, index) => {
    innerItem += `
        <div class="vacancy-panel">
            <div class="vacancy-panel-info">
                <p class="panel-info-text">${index + 1}</p>
                <p id="panelInfoText" class="panel-info-text">${item.name}</p>
            </div>
            <div class="vacancy-panel-buttons">
                <button type="submit" class="edit-btn">Edit</button>
                <button type="submit" class="delete-btn">Delete</button>
            </div>
        </div>
        `;
  });

  vacancyItems.innerHTML = innerItem;
}
