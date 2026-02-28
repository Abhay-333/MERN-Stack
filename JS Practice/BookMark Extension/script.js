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

  saveBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();
    // console.log(title,url)

    // if(!url.startsWith("http")){
    //   alert("Url must start with http or https")
    // }
    bookMarks.push({ id: Date.now(), title, url });
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    titleInput.value = "";
    urlInput.value = "";
    console.log(bookMarks);
  });
});

function renderBookMarks() {
  bookmarkList.innerHTML = "";
  bookMarks.forEach(function (bookMark) {
    const li = document.createElement("li");
    li.innerHTML = `<a href=${bookMark.url} target="_blank">${bookMark.title}</a> <button onClick="deleteBookMark(${bookMark.id})">❌</button>`;
    bookmarkList.appendChild(li);
  });
}

function deleteBookMark(id) {
  bookMarks = bookMarks.filter((bookMark) => bookMark.id !== id);
  localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
  renderBookMarks();
}
