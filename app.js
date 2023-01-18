const addUnreadStyling = (() => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardText = card.children[1].children[0];
    if (card.classList.contains("unread")) {
      card.style.backgroundColor = "#F7FAFD";
      cardText.classList.add("card__text--dot");
    }
  });
})();

const countUnread = () => {
  const cards = document.querySelectorAll(".card");
  let counter = 0;

  cards.forEach((card) => {
    if (card.classList.contains("unread")) {
      counter++;
    }
  });

  return counter;
};

const displayUnread = (() => {
  const number = document.querySelector(".header__number");

  number.textContent = countUnread();
})();

const button = document.querySelector(".header__link");
const cards = document.querySelectorAll(".card");
const number = document.querySelector(".header__number");

button.addEventListener("click", () => {
  cards.forEach((card) => {
    const cardText = card.children[1].children[0];
    if (card.classList.contains("unread")) {
      card.classList.remove("unread");
      cardText.classList.remove("card__text--dot");
      number.textContent = "0";
    }
  });
});
