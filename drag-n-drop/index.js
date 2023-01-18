const items = document.querySelectorAll("#item");
const lists = document.querySelectorAll("section.column ul");
let dragedItem = null;

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragstart", () => {});
});

lists.forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.debug("pegou");
  dragedItem = this;
  // this.className = "invisible";
}

function dragEnd() {
  console.debug("soltou");
  // this.id = "item";
}

function dragDrop() {
  console.log("drag dropped");
  this.append(dragedItem);
	dragedItem = null;
}

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}
