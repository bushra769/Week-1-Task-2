import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data-plan");
      alert(`You selected the ${plan} plan!`);
    });
  });
});