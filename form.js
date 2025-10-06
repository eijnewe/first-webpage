const form = document.getElementById("basicForm");
const amount = form.elements.amount;
const result = form.elements.result;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const dataObject = Object.fromEntries(data?.entries());

  if (dataObject) {
    console.log("resultat:", dataObject);
  }
});

form.addEventListener("input", () => {
  if (result?.value && amount?.value) {
    result.value = amount.value;
  }
});

