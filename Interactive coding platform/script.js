const btn = document.querySelector(".btn");
let isLoading = false;

const getQuestions = async () => {
  const result = await fetch(
    `https://raw.githubusercontent.com/Abhay-333/Questions/main/50_questions.json`
  );
  const data = await result.json();
  console.log(data);
};

getQuestions();

btn.addEventListener("click", function (e) {
  e.preventDefault();
  isLoading = true;
  console.log(window.location);

  document.getElementById("loadingScreen").style.display = "flex";

  setTimeout(() => {
    window.location.href = "./Components/Questions.html";
    isLoading = false;
  }, 1200);

});

