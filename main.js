console.clear();

// bookmarkClik selectors
const bookmarkClick = document.querySelector('[data-js="card__icon"]');
const show_answer = document.querySelector('[data-js="answer"]');
const btnShowAnswer = document.querySelector('[data-js="btn-show-answer"]');

// toggle bookmark on click

bookmarkClick.addEventListener("click", () => {
  if (
    bookmarkClick.src !==
    "https://img.icons8.com/windows/32/null/filled-bookmark-ribbon.png"
  ) {
    bookmarkClick.src =
      "https://img.icons8.com/windows/32/null/filled-bookmark-ribbon.png";
  } else {
    bookmarkClick.src =
      "https://img.icons8.com/material/30/null/bookmark-outline.png";
  }
});

// toggle answer

btnShowAnswer.addEventListener("click", () => {
  show_answer.classList.toggle("hidden");

  if (show_answer.classList.contains("hidden")) {
    btnShowAnswer.textContent = "Show Answer";
  } else {
    btnShowAnswer.textContent = "Hide Answer";
  }
});
