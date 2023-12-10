const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptpgraphy, network call
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("PromiseOne consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      userName: "arvindJatwa01",
      email: "arvind@google.in",
    });
  }, 1000);
});

promiseThree.then(function (result) {
  console.log(result);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Arvind", password: "1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((result) => {
    console.log(result);
    return result.userName;
  })
  .then((myUserName) => {
    console.log(myUserName);
  })
  .catch((error) => {
    console.log("error ==> ", error);
  })
  .finally(() => {
    // console.log("Finally Result is : ");
    console.log("The promiseFour is either resolved or rejected.");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "javaScript", password: "1234" });
    } else {
      reject("ERROR: javaScript went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const responseData = await response.json();
//     console.log(responseData);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
    // console.log(response)
  })
  .then((responseData) => {
    console.log(responseData);
  })
  .catch((error) => {
    console.log(error);
  });
