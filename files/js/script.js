// Variables
const tabBorder = document.querySelector("#home-border");
const zoomRange = document.querySelector("#zoomRange") , indicateZoom = document.querySelector("#indicateZoom");
const Sheet = document.querySelector("#Sheet");
const zoomMinus = document.querySelector("#zoomMinus") , zoomPlus = document.querySelector("#zoomPlus");

// Switch Between Tabs
function changeTabs(position, width = "40px") {
  tabBorder.style.left = position;
  tabBorder.style.width = width;
}

// Zoom In Sheet

zoomRange.addEventListener("click" , function(e) {
    changeZoomButton(e.target.value);
})

// Changing Zoom Function

function changeZoomButton(changeRange , isPlus) {
    if (isPlus) {
        changeRangeConverted = Number(zoomRange.value) + changeRange;
    } else {
        changeRangeConverted = changeRange;
    }

    indicateZoom.innerHTML = `${Math.round(changeRangeConverted * 100)}%`;
    Sheet.style.transform = `scale(${changeRangeConverted})`;
    zoomRange.setAttribute("value" , changeRangeConverted);
}