// // [^0-9] --> used to search any digit which is not betwwen the brackets
// // the character inside the brackets can be a single digit or a span of digits

// /[^0-9]/

// or

// new RegExp("[^0-9]")

// /[^0-9]/g

// new RegExp("[^0-9]","g")

function myFunction() {
  let str1 = "GeeksforGeeeeks@_123_$";
  let replacement = "#";

  let regex4 = /[a-g]{3,4}/gi;

  let match4 = str1.match(regex4);

  console.log(match4);
}

myFunction();
