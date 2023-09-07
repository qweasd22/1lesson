var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "image/firefox-icon.png") {
    myImage.setAttribute("src", "image/asd2.svg");
  } else {
    myImage.setAttribute("src", "image/firefox-icon.png");
  }
};



var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };

