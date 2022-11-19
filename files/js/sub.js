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