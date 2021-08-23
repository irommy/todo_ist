const inputField = document.querySelector("#input-field");
const icon = document.querySelector("button");
const listUl = document.querySelector("#list");
const listLi = document.querySelector(".list-item");

 
icon.addEventListener("mouseover", function () {
  icon.style.color = "gray";
});
icon.addEventListener("mouseout", function () {
   icon.style.color = "";
});

function inputValue() {
  return inputField.value.length;
}

function createList() {
  let li = document.createElement("li");
  let text = document.createTextNode(inputField.value);
  let icon2 = document.createElement("i");
  icon2.className = "fas fa-trash";
  icon2.classList.add("del");
  li.classList.add("list-item");
  icon2.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(text);
  li.appendChild(icon2);
  listUl.appendChild(li);
  inputField.value = "";
}

icon.addEventListener("click", function () {
  if (inputValue() > 0) {
    createList();
  }
});

function deleteMe(toBeDeleted) {
  toBeDeleted.parentNode.remove();
}

inputField.addEventListener("keypress", function (event) {
  if (inputValue() > 0 && event.which === 13) {
    createList();
  }
});
