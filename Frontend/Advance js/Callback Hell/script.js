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

// sendEmails(userEmails)

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

function instaSeDataLekeAao(userName, cb) {
  console.log("fetching user details...");
  let time = Math.floor(Math.random() * 2);
  setTimeout(() => {
    cb(
      { userName: "Abhay", id: 101, email: "Asdas", kuchkrtaHai: true },
      function (id) {
        console.log(id);
      }
    );
  }, time * 1000);
}

// instaSeDataLekeAao("Abhay", function (data, cb2) {
//   console.log(data);
//   console.log("fetching User posts...")
//   let time = Math.floor(Math.random() * 3);
//   setTimeout(() => {
//     cb2({posts: ["post1", "post2","post3","post4"]})
//   }, time * 1000);
// });

function afterDelay(time, cb) {
  setTimeout(() => {
    cb();
  }, time);
}

// afterDelay(1000, function(){
//     console.log("CB")
// })

function getUser(userName, cb) {
  let time = Math.floor(Math.random() * 2);
  setTimeout(() => {
    cb({ userName: "Abhay", id: 1 }, function (posts) {
      console.log(posts);
    });
  }, time * 1000);
}

// getUser("Abhay", function (details, cb2) {
//   console.log(details);
//   let time = Math.floor(Math.random() * 2);
//   setTimeout(() => {
//     cb2({posts: ["post1","post2","post3","post4","post5",]})
//   }, time);
// });

function loginUser(userName, cb) {
  console.log("Loggin user Details...");
  setTimeout(() => {
    cb({ userName, id: 1 });
  }, 1000);
}

function fetchUserPermissions(userId, cb) {
  console.log("Fetching user Permissions...");
  setTimeout(() => {
      cb({ id: userId, permission: ["p1", "p2", "p3", "p4"] });
    }, 1000);
}

function loadDashboard(data, cb) {
    console.log("Loading Dashboard Components...");
    setTimeout(()=>{
        cb({id: data.id, components:["c1","c2","c3","c4"]})
    },1000)
}

loginUser("Abhay", function (userData) {
  console.log(userData);

  fetchUserPermissions(userData.id, function (permissions) {
    console.log(permissions);

    loadDashboard(permissions, function (components) {
        console.log(components)
        console.log("Dashboard loaded");
    });
  });
});
