/*class Aims {
  constructor(aimTitle, aimDescription) {
    this.title = aimTitle;
    this.description = aimDescription;
  }
}*/

window.onload = function () {
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
  document.getElementById("mainAims").innerHTML = " ";

  for (let i = 0; i < aimList.length; i++) {
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    let button = document.createElement("button");
    button.innerHTML = "delete";
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
  }
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
  createListItem();
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
