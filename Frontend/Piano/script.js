const key1 = new Audio("./Resources/Audio/28.mp3");
const sounds = [];
const box = document.querySelector(".box");
const allWhiteKeysArr = [...document.querySelectorAll(".key")];
const allBlackKeysArr = [...document.querySelectorAll(".key span")];

// ye wala loop for array mey object store krne ke liye
for (let i = 28; i < 64; i++) {
  sounds.push(new Audio(`./Resources/Audio/${i}.mp3`));
}

allWhiteKeysArr.forEach((elem, index) => (elem.id = `key${index + 1}`));
allBlackKeysArr.forEach((elem, index) => (elem.id = `key${index + 22}`));

let allKeys = [...allWhiteKeysArr, ...allBlackKeysArr];

console.log(allBlackKeysArr);

box.addEventListener("click", (e) => {
  const id = e.target.id;
  if (!id) return;

  const index = Number(id.replace("key", ""))
  const audio = sounds[index]

  if(audio){
    audio.currentTime = 0
    audio.play();
  }
});
