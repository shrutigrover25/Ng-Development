// let promise = new Promise(function (resolve, reject) {
//   resolve("welcome");
// });

// promise.then(
//   function (successmessage) {
//     console.log(successmessage);
//   },
//   function (errormessage) {
//     console.log(errormessage);
//   }
// );

let promise = new Promise(function (resolve, reject) {
  reject("promise rejected");
});

promise
  .then(function (successmessage) {
    console.log(successmessage);
  })
  .catch(function (errormessage) {
    console.log(errormessage);
  });
