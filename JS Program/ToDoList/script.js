let text = document.getElementById("textbar");
let submit = document.getElementById("submit");
let clear = document.getElementById("clear");
let count = 0

submit.addEventListener("click", function () {
  if (text.value.trim() !== "") {
    let newElement = document.createElement("li");
    newElement.classList.add("list-group-item")
    newElement.appendChild(document.createTextNode(text.value));
    document.getElementById("list").appendChild(newElement);
    document.getElementById("textbar").value = "";
    count++;
  } else {
    alert("Insert a text to add to the list");
  }
});
clear.addEventListener("click", function () {
  if (count == 0) {
    alert("Already clear");
  } else {
    document.getElementById("list").innerHTML = "";
    count = 0;
  }
});
