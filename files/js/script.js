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
const boldButton = document.querySelector("#boldButton");
const italicButton = document.querySelector("#italicButton");
const underlineButton = document.querySelector("#underlineButton");
const strikethroughtButton = document.querySelector("#strikethroughtButton");
const borderAllButton = document.querySelector("#borderAllButton");

// Get Selected Cell

tableBody.forEach(function (element) {
  element.addEventListener("click", function () {
    selectedElement = element;

    if(selectedElement.style.fontWeight == "bold") {
      boldButton.className = "activeBtn";
    } else {
      boldButton.classList.remove("activeBtn");
    }

    if(selectedElement.style.fontStyle === "italic") {
      italicButton.className = "activeBtn";
    } else {
      italicButton.classList.remove("activeBtn");
    }

    if(selectedElement.style.textDecoration === "underline") {
      underlineButton.className = "activeBtn";
    } else {
      underlineButton.classList.remove("activeBtn");
    }

    if(selectedElement.style.textDecoration === "line-through") {
      strikethroughtButton.className = "activeBtn";
    } else {
      strikethroughtButton.classList.remove("activeBtn");
    }

    if(selectedElement.classList.contains("borderAll")) {
      borderAllButton.className = "activeBtn";
    } else {
      borderAllButton.classList.remove("activeBtn");
    }

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

// Bold
boldButton.addEventListener("click" , function () {
  if (selectedElement.style.fontWeight === "bold") {
    selectedElement.style.fontWeight = "normal";
    boldButton.classList.remove("activeBtn");
  } else {
    selectedElement.style.fontWeight = "bold";
    boldButton.className = "activeBtn";
  }
  selectedElement.select();
});

// Italic
italicButton.addEventListener("click" , function () {
  if (selectedElement.style.fontStyle === "italic") {
    selectedElement.style.fontStyle = "normal";
    italicButton.classList.remove("activeBtn");
  } else {
    selectedElement.style.fontStyle = "italic";
    italicButton.className = "activeBtn";
  }
  selectedElement.select();
});

// Underline
underlineButton.addEventListener("click" , function () {
  if (selectedElement.style.textDecoration === "underline") {
    selectedElement.style.textDecoration = "none";
    underlineButton.classList.remove("activeBtn");
  } else {
    strikethroughtButton.classList.remove("activeBtn");
    selectedElement.style.textDecoration = "underline";
    underlineButton.className = "activeBtn";
  }
  selectedElement.select();
});

// Strikethorught
strikethroughtButton.addEventListener("click" , function () {
  if (selectedElement.style.textDecoration === "line-through") {
    selectedElement.style.textDecoration = "none";
    strikethroughtButton.classList.remove("activeBtn");
  } else {
    underlineButton.classList.remove("activeBtn");
    selectedElement.style.textDecoration = "line-through";
    strikethroughtButton.className = "activeBtn";
  }
  selectedElement.select();
});

// Border All
borderAllButton.addEventListener("click" , function () {
  if (selectedElement.classList.contains("borderAll")) {
    selectedElement.classList.remove("borderAll");
    borderAllButton.classList.remove("activeBtn");
  } else {
    selectedElement.className = "borderAll";
    borderAllButton.className = "activeBtn";
  }
  selectedElement.select();
});