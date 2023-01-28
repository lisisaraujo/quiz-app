const darkmode_btn = document.querySelector('[data-js="darkmode"]');
const darkmode_profileImg = document.querySelector(
  '[data-js="profile__image" ]'
);
const menuBarProfileImg = document.querySelector(
  '[data-js="profile-page__icon"]'
);

darkmode_btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkmode_profileImg.src = "darkmodeprofile.png";
    menuBarProfileImg.src = "darkmodeprofile.png";
  } else {
    darkmode_profileImg.src =
      "https://img.icons8.com/ios/50/null/cat-profile.png";
    menuBarProfileImg.src =
      "https://img.icons8.com/ios/50/null/cat-profile.png";
  }
});
