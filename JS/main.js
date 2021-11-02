class Aims {
  constructor(aimTitle, aimDescription) {
    this.title = aimTitle;
    this.description = aimDescription;
  }
}

window.onload = function () {
  createList();
};
let aim1 = new Aims("Träna", "Benböj");
let aim2 = new Aims("Sova", "7 timmar");
let aim3 = new Aims("Äta frukost", "Havregröt");

function createList() {
  let aimList = [aim1, aim2, aim3];
  let listContainer = document.createElement("div");

  for (let i = 0; i < aimList.length; i++) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    li.innerHTML =
      aimList[i].title + " |" + "Description: " + aimList[i].description;

    ul.appendChild(li);
    listContainer.appendChild(ul);
  }
  document.body.appendChild(listContainer);
}
