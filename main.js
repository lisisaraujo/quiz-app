console.clear();

// bookmarkClik
const bookmarkClick = document.querySelector('[data-js="card__icon"]');

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

// show answer

const answer = document.querySelector('[data-js="answer"]');
const btnShowAnswer = document.querySelector('[data-js="btn-show-answer"]');

btnShowAnswer.addEventListener("click", () => {
  const toggleAnswer = () => {
    const isHidden = answer.style.display === "none";
    if (isHidden) {
      answer.style.display = "block";
    } else {
      // Hide element
      answer.style.display = "none";
      btnShowAnswer.textContent = "Show answer";
    }
  };

  answer.classList.add("hidden");
  if (btnShowAnswer) {
    answer.classList.remove("hidden");
    btnShowAnswer.textContent = "Hide answer";
  }
  toggleAnswer();
});

// const toggleAnswer = () => {
//   const isHidden = answer.style.display === "none";
//   if (isHidden) {
//     answer.style.display = "block";
//     btnShowAnswer.textContent = btnShowAnswer;
//   } else {
//     // Hide element
//     answer.style.display = "none";
//     btn.innerHTML = "Hide answer";
//   }
// };
