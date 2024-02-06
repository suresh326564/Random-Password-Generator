const passwordBox = document.querySelector(".password");
const generateBox = document.querySelector(".generate");

generateBox.addEventListener("click", () => {
    createPassword();
});

const desiredLength = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numCase = "0123456789";
const symbolCase = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
const allChar = upperCase + lowerCase + numCase + symbolCase;
const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numCase[Math.floor(Math.random() * numCase.length)];
  password += symbolCase[Math.floor(Math.random() * symbolCase.length)];

  while (desiredLength > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value=password;
};

function copyPass() {
    passwordBox.select(); // Select the text inside the input field
    document.execCommand("copy"); // Execute the copy command
    // Provide user feedback
    alert(" copy Password to clipboard!");
}
