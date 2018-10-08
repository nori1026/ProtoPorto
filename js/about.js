let textbox = document.querySelector(".textbox");

textbox.addEventListener("focus", borderColor);
textbox.addEventListener("blur", offText);

function borderColor() {
  textbox.style.opacity = "0.7";
  textbox.style.borderColor = "#ff00ff";
  textbox.style.background = "#fff";
  textbox.style.outline = "none";
  textbox.style.borderRadius = "5px";
}

function offText() {
  textbox.style.background = "transparent";
  textbox.style.borderWidth = "3px";
  textbox.style.borderColor = "#fff";
}
