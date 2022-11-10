// Changes Tabs
const homeBorder = document.querySelector("#home-border");
function changeTabs(position , width = "40px") {
homeBorder.style.left = position;
homeBorder.style.width = width;
}