const imgBox = document.querySelector(".imgBox");

const whiteBoxes = document.getElementsByClassName("whiteBox");

// event listeners for draggable items
imgBox.addEventListener("dragstart", (e) => {
  console.log("start");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
  console.log("end");
});

//

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover");
  });

  whiteBox.addEventListener("dragenter", (e) => {
    console.log("dragenter");
    e.target.className += "dashed";
  });

  whiteBox.addEventListener("dragleave", (e) => {
    console.log("dragleave");
    e.target.className = "whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
    console.log("drop");
  });
}
