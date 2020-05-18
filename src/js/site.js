const viewportElements = document.querySelectorAll("[data-viewport]");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry.target.dataset.viewport);
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
  });
});

viewportElements.forEach((viewportElement) => {
  observer.observe(viewportElement);
});
