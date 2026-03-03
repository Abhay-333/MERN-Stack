// ## 💡 Q1: Bookmark Manager (Mini Chrome Extension Clone)
// **Problem:** Build a widget that lets users save (title + URL), display, and persist bookmarks.

// **Steps:**
// 1. HTML inputs (title, URL) + button + empty `<ul>`
// 2. Capture `.value`
// 3. Validate URL (`startsWith("http")`)
// 4. Create bookmark object
// 5. Push to array
// 6. Save array to `localStorage`
// 7. Render `<li>` with `<a target="_blank">`
// 8. On page load → fetch & render saved bookmarks

const titleInput = customSelector("#titleInput");
const urlInput = customSelector("#urlInput");
const saveBtn = customSelector("#saveBtn");
const bookmarkList = customSelector("#bookmarkList");
let bookMarks = [];

function customSelector(elem) {
  return document.querySelector(elem);
}

document.addEventListener("DOMContentLoaded", async () => {
  const saved = localStorage.getItem("bookMarks");
  if (saved) {
    bookMarks = JSON.parse(saved);
    renderBookMarks();
  }
});

const rerenderBookmarks = () => {
  const saved = localStorage.getItem("bookMarks");
  if (saved) {
    bookMarks = JSON.parse(saved);
    renderBookMarks();
  }
};

saveBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  // console.log(title,url)

  if(!url.startsWith("http")){
    alert("Url must start with http or https")
  }

  bookMarks.push({ id: Date.now(), title, url });
  localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
  renderBookMarks();

  titleInput.value = "";
  urlInput.value = "";
  console.log(bookMarks);
});

function renderBookMarks() {
  bookmarkList.innerHTML = "";
  bookMarks.forEach(function (bookMark, index) {
    const li = document.createElement("li");
    let button = document.createElement("button");
    let a = document.createElement("a");
    // a.setAttribute("href", bookMark.url);
    
    a.innerHTML = bookMark.title;
    button.setAttribute("data-id", bookMark.id);
    button.innerHTML = "❌";
    a.appendChild(button);
    li.appendChild(a);

    button.addEventListener("click", (btn) => {
      let id = btn.target.dataset.id;
      bookMarks = bookMarks.filter((bookMark) => {
        return bookMark.id != id;
      });
      localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
      rerenderBookmarks();
      console.log(bookMarks);
    });
    //  li.innerHTML = `<a href=${bookMark.url} target="_blank">${bookMark.title}</a> <button data-id=${index}></button>`;
    bookmarkList.appendChild(li);
  });
}

// const deleteBookMark = document.querySelector(".deleteBookMark")

//   deleteBookMark.addEventListener("click", function(elem){
//   console.log(elem);
// });

// function deleteBookMark(id) {
//   bookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
//   localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
//   renderBookMarks();
// }
