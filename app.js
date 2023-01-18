const addUnreadStyling = (cards) => {
  cards.forEach((card) => {
    const cardText = card.children[1].children[0];

    if (card.classList.contains("unread")) {
      card.style.backgroundColor = "#F7FAFD";
      //Adds the orange dot if not read
      cardText.classList.add("card__text--dot");
    }
  });
};

const countUnread = (cards) => {
  let counter = 0;

  cards.forEach((card) => {
    if (card.classList.contains("unread")) {
      counter++;
    }
  });

  return counter;
};

//Displays the nubmer in the header
const displayUnreadTotal = (cards, unreadTotal) => {
  unreadTotal.textContent = countUnread(cards);
};

const handleUnread = (() => {
  const cards = document.querySelectorAll(".card");
  const unreadTotal = document.querySelector(".header__number");
  const markRead = document.querySelector(".header__link");

  addUnreadStyling(cards);
  displayUnreadTotal(cards, unreadTotal);

  //Handles clicking of mark all as read
  markRead.addEventListener("click", () => {
    cards.forEach((card) => {
      const cardText = card.children[1].children[0];

      //If card contains unread class removes all styling on click
      if (card.classList.contains("unread")) {
        card.classList.remove("unread");
        card.style.backgroundColor = "#ffffff";
        cardText.classList.remove("card__text--dot");
        unreadTotal.textContent = "0";
      }
    });
  });
})();
