document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.getElementsByClassName("FAQ__title");

  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      const icon = this.childNodes[1];
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-times");

      const content = this.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
  }
});
