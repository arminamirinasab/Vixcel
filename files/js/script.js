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

const tabBorder = document.querySelector("#home-border");
function changeTabs(position, width = "40px") {
  tabBorder.style.left = position;
  tabBorder.style.width = width;
}

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
const copyButton = document.querySelector("#copyButton");
tableBody.forEach(function (element) {
  element.addEventListener("click", function (e) {
    copyButton.addEventListener("click", function () {
      if(element.value.length != 0) {
        navigator.clipboard.writeText(element.value);
        element.select();
      }
    });
  });
});