const form = document.querySelector('[data-js="question_form"]');
const newCard = document.querySelector('[data-js="new-cards"]');
const submitBtn = document.querySelector('[data-js="submit-button"]');

const question = document.querySelector('[data-js="question-text"]');
const answer = document.querySelector('[data-js="answer-text"]');
const tag = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // calling the function to use the data input of the form
  createCard(data);
});

// function to create new elements, add the styling and append it to the card

function createCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("cards__card");

  const cardQuestion = document.createElement("h2");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = cardData.question;

  const cardAsnwer = document.createElement("p");
  cardAsnwer.style.display = "none";
  cardAsnwer.classList.add("card-asnwer");
  cardAsnwer.textContent = cardData.answer;

  const cardBtn = document.createElement("button");
  cardBtn.classList.add("btn--show-answer");
  cardBtn.textContent = "Show Answer";

  const cardTags = document.createElement("div");
  cardTags.classList.add("card__hashtags");

  const cardHashtags = document.createElement("a");
  cardHashtags.classList.add("hashtag");
  cardHashtags.textContent = cardData.tag;

  const cardBookmarks = document.createElement("div");
  cardBookmarks.classList.add("card__bookmark");

  const cardBookmarkBtn = document.createElement("button");
  cardBookmarkBtn.classList.add("btn__bookmark");

  const cardBookmarkImg = document.createElement("img");
  cardBookmarkImg.classList.add("btn__bookmark");
  cardBookmarkImg.src =
    "https://img.icons8.com/material/30/null/bookmark-outline.png";

  cardBookmarkBtn.append(cardBookmarkImg);
  cardBookmarks.append(cardBookmarkBtn);
  cardTags.append(cardHashtags);
  card.append(cardQuestion, cardBtn, cardAsnwer, cardTags, cardBookmarks);
  newCard.append(card);

  form.reset();
  form.elements.question.focus();
  amountLeft.textContent = maxLength;
  amountLeftQuestion.textContent = maxLength;
}

// characters counter

const amountLeft = document.querySelector('[data-js="amountLeft"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const maxLength = question.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};
updateAmountLeft(maxLength);
answer.addEventListener("input", () => {
  updateAmountLeft(maxLength - answer.value.length);
});

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};
updateAmountLeftQuestion(maxLength);
question.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLength - question.value.length);
});
