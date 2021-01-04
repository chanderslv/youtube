document.querySelector(".dropdown").addEventListener("click", function () {
    if (this.classList.contains("active")) {
        document.querySelector(".side-menu").classList.remove("active");
        this.classList.remove("active");
      } else {
        document.querySelector(".side-menu").classList.add("active");
        this.classList.add("active");
      }
});