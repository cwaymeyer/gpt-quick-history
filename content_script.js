console.log("🏃‍♂️ content_script.js");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  console.log(e);
  console.log(e.target.value);
});

form.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(e);
    console.log(e.target.value);
  }
});
