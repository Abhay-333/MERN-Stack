// const box =  document.querySelector(".box")

const userEmails = [
  { email: "john.doe@gmail.com" },
  { email: "abhay.kumar@example.com" },
  { email: "alex.smith@yahoo.com" },
  { email: "priya.sharma@outlook.com" },
  { email: "rohan.patel@gmail.com" },
  { email: "neha.verma@example.org" },
  { email: "sam.wilson@icloud.com" },
  { email: "ananya.iyer@gmail.com" },
];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 1.5);
    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) {
        res("Email successfull sent");
      } else {
        rej("Email not sent");
      }
    }, time * 1000);
  });
}

async function sendEmails(userEmails) {
  let allResponses = userEmails.map((user, index) => {
    return sendEmail(user.email)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  });

  let ans = await Promise.all(allResponses);
  console.log(ans);
}

sendEmails(userEmails)

function profileSeDataLekerAao(userName, cb) {
  console.log("Fetching user data...");
  let time = Math.floor(Math.random() * 2);
  setTimeout(() => {
    cb({
      userId: 101,
      userName,
      age: 20,
      email: "abcd@emale.com",
    });
  }, time * 1000);
}

function profileSePostsLekerAao(id, cb) {
  console.log("Fetching user posts...");
  setTimeout(() => {
    cb({
      userId: id,
      posts: [
        { postName: "post1" },
        { postName: "post2" },
        { postName: "post2" },
      ],
    });
  }, 1000);
}

// profileSeDataLekerAao("Abhay", function (data) {
//   console.log(data);
//   profileSePostsLekerAao(data.userId, function (results) {
//     console.log(results.posts);
//   });
// });
