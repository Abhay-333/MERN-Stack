const allElements = document.querySelectorAll(".elem");
const allButtons = document.querySelectorAll(".elem button");
let isFriend = false;

allButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (!isFriend) {
      e.target.style.backgroundColor = "red";
      e.target.innerHTML = "Remove From Friend list";
      isFriend = true;
    } else {
      e.target.style.backgroundColor = "green";
      e.target.innerHTML = "Add Friend";
      isFriend = false;
    }
  })
);
