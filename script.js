function validateForm() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const subject = document.getElementById("subject").value;
  const agree = document.getElementById("agree").value;
  const addressError = document.getElementById("adress-error");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const subjectError = document.getElementById("subject-error");
  const agreeError = document.getElementById("agree-error");

  nameError.textContent = "";
  emailError.textContent = "";
  addressError.textContent = "";
  subjectError.textContent = "";
  agreeError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Please neter your name properly";
    isValid = false;
  }

  if (address === "") {
    addressError.textContent = "Please eneter your address";
    isValid = false;
  }

  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address";
    isValid = true;
  }

  if (password === "" || password.length < 6) {
    passwordError.textContent = "please enter a 6 characters";
    isValid = false;
  }

  if (subject === "") {
    subjectError.textContent = "Please select your course";
    isValid = false;
  }

  if (!agree) {
    agreeError.textContent = "Please agree to the above Information";
    isValid = false;
  }

  return isValid;
}
