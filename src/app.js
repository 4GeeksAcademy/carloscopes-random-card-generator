/*import "bootstrap";
import "./style.css";*/

window.onload = function() {
  newCardGenerator();

  function suitGenerator() {
    let suites = ["♠", "♣", "♥", "♦"];
    let randomSuitPosition = Math.floor(Math.random() * suites.length);
    return suites[randomSuitPosition];
  }

  function numberGenerator() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let randomNumberPosition = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumberPosition];
  }

  const button = document.querySelector("#btn");
  button.addEventListener("click", newCardGenerator);

  function newCardGenerator() {
    const numberCard = document.querySelector(".number");
    let numberElement = numberGenerator();
    numberCard.innerHTML = numberElement;

    const suitCard = document.querySelectorAll("span");
    let suitElement = suitGenerator();
    suitCard.forEach(span => {
      span.innerHTML = suitElement;
      if (suitElement == "♦" || suitElement == "♥") {
        span.style.color = "#E5446D";
      }
    });
  }
  window.setInterval(() => {
    newCardGenerator();
  }, 5000);
};
