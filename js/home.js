const btn = document.querySelector("#togglebtn");
const open_btn = document.querySelector("#insidebtn");
const popup = document.querySelector(".popup");
const popContent = document.querySelector(".container");

btn.addEventListener("click", switchView);
open_btn.addEventListener("click", closeView);
popup.addEventListener("click", clickOut);

const fill = document.querySelector(".fill");
const fill2 = document.querySelector(".fill2");
const empties = document.querySelectorAll(".empty");

// Fill listeners
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// Drag Functions
var item = null;

function dragStart(e) {
  item = e.target;
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd(e) {
  this.className = null;
}

function dragOver(e) {
  e.preventDefault();
  // console.log("dragover");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  // console.log("dragenter");
}

function dragLeave() {
  this.className = "empty";
  // console.log("dragleave");
}

function dragDrop(e) {
  if (this == item) {
    this.className = "e.target";
    console.log(e.target);
    e.target.appendChild(item);
    e.preventDefault();
  }
}

// Modal
function switchView() {
  popup.style.display = "block";
}

function closeView() {
  popup.style.display = "none";
}

function clickOut(e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
}
