const inputBox = document.getElementById("inputBox");

document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent.trim();

    if (val === "AC") {
      inputBox.value = "";
    } else if (val === "DEL") {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (val === "=") {
      try {
        inputBox.value = eval(inputBox.value);
      } catch {
        inputBox.value = "Error";
      }
    } else {
      inputBox.value += val;
    }
  });
});