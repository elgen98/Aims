/*class Aims {
  constructor(aimTitle, aimDescription) {
    this.title = aimTitle;
    this.description = aimDescription;
  }
}*/

window.onload = function () {
  //createList();
  document.getElementById("myBtn").addEventListener("click", showModal);
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", deleteModal);
  document.getElementById("approveBtn").addEventListener("click", addObject);
};

let aimList = [];

const title = document.getElementById("titleOfAim");
const description = document.getElementById("descriptionOfAim");

function createListItem() {
  let last = aimList[aimList.length - 1];
  let listContainer = document.createElement("div");
  listContainer.className = "mainAim";

  let ul = document.createElement("ul");
  let ul2 = document.createElement("ul");
  let li = document.createElement("li");
  let li2 = document.createElement("li");

  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  li.innerHTML = last.title;
  li2.innerHTML = last.description;

  ul.appendChild(li);
  listContainer.appendChild(check);
  li.appendChild(ul2);
  ul2.appendChild(li2);
  listContainer.appendChild(ul);

  document.getElementById("aims").appendChild(listContainer);
}

function addObject() {
  aimList.push({
    title: title.value,
    description: description.value,
  });
  console.log(aimList);
  createListItem();
}

function remove(position) {
  aimList.splice(position, 1);
}

for (let i = 0; i < aimList.length; i++) {
  let button = document.createElement("button");

  button.addEventListener("click", () => {
    remove(i);
  });

  button.appendChild(aimList[i]);
}

/*function createList() {
  let listContainer = document.createElement("div");
  listContainer.className = "mainAim";

  for (let i = 0; i < aimList.length; i++) {
    let ul = document.createElement("ul");
    let ul2 = document.createElement("ul");
    let li = document.createElement("li");
    let li2 = document.createElement("li");

    li.innerHTML = aimList[i].title;

    li2.innerHTML = aimList[i].description;
    ul.appendChild(li);
    li.appendChild(ul2);
    ul2.appendChild(li2);
    listContainer.appendChild(ul);
  }
  document.getElementById("aims").appendChild(listContainer);
}*/

let modal = document.getElementById("myModal");

//let btn = document.getElementById("myBtn");

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
