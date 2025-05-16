// Change text and style dynamically
function changeText() {
  const textElement = document.getElementById("dynamic-text");
  textElement.textContent = "The text has been changed!";
  textElement.style.color = "blue";
  textElement.style.fontSize = "20px";
  textElement.style.fontWeight = "bold";
}

// Add a new element dynamically
function addElement() {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "This is a new dynamically added element.";
  newDiv.className = "added-box";
  container.appendChild(newDiv);
}

// Remove last added element
function removeElement() {
  const container = document.getElementById("container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
