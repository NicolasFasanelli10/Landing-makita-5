const componentMarkers = document.querySelectorAll("#componentes > figure span[data-marker]");
const componentLabels = document.querySelectorAll("#componentes ol li[data-marker]");

const setActiveMarker = (marker) => {
  componentMarkers.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.marker === marker);
  });

  componentLabels.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.marker === marker);
  });
};

const clearActiveMarker = () => {
  componentMarkers.forEach((item) => item.classList.remove("is-active"));
  componentLabels.forEach((item) => item.classList.remove("is-active"));
};

componentMarkers.forEach((marker) => {
  marker.addEventListener("mouseenter", () => setActiveMarker(marker.dataset.marker));
  marker.addEventListener("mouseleave", clearActiveMarker);
  marker.addEventListener("focus", () => setActiveMarker(marker.dataset.marker));
  marker.addEventListener("blur", clearActiveMarker);
});
