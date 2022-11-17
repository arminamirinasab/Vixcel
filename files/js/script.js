// Hidden Loading Section

const loadingSection = document.getElementById("loadingSection");
const loadingSectionTransitionTime = 700;
loadingSection.style.transitionDuration = `${
  loadingSectionTransitionTime / 1000
}s`;
window.onload = function () {
  loadingSection.style.opacity = "0";
  setTimeout(function () {
    loadingSection.style.display = "none";
  }, loadingSectionTransitionTime);
};

// Switch Between Tabs

const menu = document.querySelector("#menu");
menu.addEventListener("click", function (e) {
  for (let i = 0; i < menu.children.length; i++) {
    menu.children[i].classList.remove("activeTab");
  }
  e.target.className = "activeTab";
});

// Zoom In Sheet

const zoomRange = document.querySelector("#zoomRange"),
  indicateZoom = document.querySelector("#indicateZoom");
const Sheet = document.querySelector("#Sheet");
const zoomMinus = document.querySelector("#zoomMinus"),
  zoomPlus = document.querySelector("#zoomPlus");

zoomRange.addEventListener("click", function (e) {
  changeZoomButton(e.target.value);
});

function changeZoomButton(changeRange, isPlus) {
  if (isPlus) {
    changeRangeConverted = Number(zoomRange.value) + changeRange;
  } else {
    changeRangeConverted = changeRange;
  }

  indicateZoom.innerHTML = `${Math.round(changeRangeConverted * 100)}%`;
  Sheet.style.transform = `scale(${changeRangeConverted})`;
  zoomRange.setAttribute("value", changeRangeConverted);
}

let tableBody = document.querySelectorAll("input");
const copyButton = document.querySelector("#copyButton"),
  cutButton = document.querySelector("#cutButton"),
  pasteButton = document.querySelector("#pasteButton");
let selectedElement;

// Get Selected Cell

tableBody.forEach(function (element) {
  element.addEventListener("click", function () {
    selectedElement = element;
    if (element.value.length != 0) {
      element.select();
    }
  });
});
// Copy
copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(selectedElement.value);
  selectedElement.select();
});
// Cut
cutButton.addEventListener("click", function () {
  navigator.clipboard.writeText(selectedElement.value);
  selectedElement.value = "";
});
// Paste
pasteButton.addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then((clipText) => (selectedElement.value = clipText));
});
