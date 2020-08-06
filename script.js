const toggleButton = document.querySelector(".toggleMenuContainer");

const menuButtonOpened = document.createElement("div");
constuButtonOpened.style.cssText =
  "position:absolute; border: solid 1px; top: 0; height:200px; width:100px; z-index: 10; background-color:white";

const nav = document.createElement("a");
const navText = document.createTextNode("join");
nav.setAttribute("href", "join.html");
nav.appendChild(navText);
menuButtonOpened.appendChild(nav);

toggleButton.addEventListener("mouseenter", () => {
  // toggleButton.style.border = "5px dotted orange";
  // console.log(toggleButton)
  toggleButton.appendChild(menuButtonOpened);
  console.log(toggleButton);
});
