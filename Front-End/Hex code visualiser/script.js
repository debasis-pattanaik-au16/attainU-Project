const input = document.getElementById("input");
const btn = document.querySelector(".btn");

const changeColor = () => {
  let colorName = input.value;
  document.body.style.backgroundColor = colorName;
  input.value = "";
};

btn.addEventListener("click", changeColor);
