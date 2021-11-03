class Aims {
  constructor(aimTitle, aimDescription) {
    this.title = aimTitle;
    this.description = aimDescription;
  }
}

window.onload = function () {
  createList();
  document.getElementById("myBtn").addEventListener("click", showModal);
  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", deleteModal);
};
let aim1 = new Aims("Träna", "Benböj");
let aim2 = new Aims("Sova", "7 timmar");
let aim3 = new Aims("Äta frukost", "Havregröt");

function createList() {
  let aimList = [aim1, aim2, aim3];
  let listContainer = document.createElement("div");

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
  document.body.appendChild(listContainer);
}

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
