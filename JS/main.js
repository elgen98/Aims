window.onload = function () {
  document.getElementById("createBtn").addEventListener("click", showModal);
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", deleteModal);
  document.getElementById("approveBtn").addEventListener("click", addObject);
  document.getElementById("sortBtn").addEventListener("click", sortList);
  document
    .getElementById("clearBtn")
    .addEventListener("click", clearLocalStorage);
  checkLocalStorage();
  createListItem();
};

let aimList = [];

function checkLocalStorage() {
  aimList = JSON.parse(localStorage.getItem("storedAims")) || [];
}

const title = document.getElementById("titleOfAim");
const description = document.getElementById("descriptionOfAim");
let activeAim = true;
document.getElementById("mainAims").innerHTML = "<h3>Your active Aims</h3>";
document.getElementById("finishedAims").innerHTML =
  "<h3>Your finished Aims</h3>";

function createListItem() {
  document.getElementById("mainAims").innerHTML = "<h3>Your active Aims</h3>";
  document.getElementById("finishedAims").innerHTML =
    "<h3>Your finished Aims</h3>";

  for (let i = 0; i < aimList.length; i++) {
    if (aimList[i].activeAim == true) {
      let ul = document.createElement("ul");
      let li = document.createElement("li");

      let button = document.createElement("button");
      button.className = "checkBtn";
      button.innerHTML = '<i class="fas fa-trash-alt"></i>';
      button.addEventListener("click", () => {
        remove(i);
      });

      if (aimList[i].description.length > 0) {
        let ul2 = document.createElement("ul");
        let li2 = document.createElement("li");

        li.innerHTML = aimList[i].title;
        li2.innerHTML = aimList[i].description;

        li.appendChild(button);

        ul.appendChild(li);
        li.appendChild(ul2);
        ul2.appendChild(li2);
        document.getElementById("mainAims").appendChild(ul);
      } else {
        li.innerHTML = aimList[i].title;

        li.appendChild(button);

        ul.appendChild(li);
        document.getElementById("mainAims").appendChild(ul);
      }
    } else {
      let ul = document.createElement("ul");
      let li = document.createElement("li");

      let button = document.createElement("button");
      button.className = "uncheckBtn";
      button.innerHTML = '<i class="fas fa-check-circle"></i>';
      button.addEventListener("click", () => {
        add(i);
      });

      if (aimList[i].description.length > 0) {
        let ul2 = document.createElement("ul");
        let li2 = document.createElement("li");

        li.innerHTML = aimList[i].title;
        li2.innerHTML = aimList[i].description;

        li.appendChild(button);

        ul.appendChild(li);
        li.appendChild(ul2);
        ul2.appendChild(li2);
        document.getElementById("finishedAims").appendChild(ul);
      } else {
        li.innerHTML = aimList[i].title;

        li.appendChild(button);

        ul.appendChild(li);
        document.getElementById("finishedAims").appendChild(ul);
      }
    }
  }
}

function addObject() {
  aimList.push({
    title: title.value,
    description: description.value,
    activeAim,
  });

  let storeAims = JSON.stringify(aimList);
  localStorage.setItem("storedAims", storeAims);
  console.log(JSON.parse(localStorage["storedAims"]));

  createListItem();
  document.getElementById("titleOfAim").value = "";
  document.getElementById("descriptionOfAim").value = "";
}

function remove(position) {
  aimList[position].activeAim = false;
  let storeAims = JSON.stringify(aimList);
  localStorage.setItem("storedAims", storeAims);
  console.log(aimList);
  createListItem();
}

function add(position) {
  aimList[position].activeAim = true;
  let storeAims = JSON.stringify(aimList);
  localStorage.setItem("storedAims", storeAims);
  console.log(aimList);
  createListItem();
}

function sortList() {
  aimList.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
  );
  createListItem();
}

function clearLocalStorage() {
  localStorage.clear();
  window.location.reload();
}

let modal = document.getElementById("myModal");

function showModal() {
  modal.style.display = "block";
}

function deleteModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
