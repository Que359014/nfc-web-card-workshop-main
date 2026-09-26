document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        link.click();
      }
    });
  });
});
