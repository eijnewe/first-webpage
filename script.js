document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-text");
  const extraText = document.querySelector(".extra-text");

  toggleBtn.addEventListener("click", function () {
    console.log("hej");
    const isVisible = extraText.style.display === "block";

    console.log("isVisible", isVisible);

    extraText.style.display = isVisible ? "none" : "block";

    console.log("display", extraText.style.display);

    toggleBtn.textContent = isVisible ? "Läs mer" : "Läs mindre";
  });
});
