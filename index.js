const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let paragraph1EL = document.getElementById("password1-el");
let paragraph2EL = document.getElementById("password2-el");
let randomPass1 = "";
let randomPass2 = "";

function generatePassword() {
  for (let p = 0; p <= 15; p++) {
    let randomIndexNumber = Math.floor(Math.random() * characters.length);
    let randomIndexNumber2 = Math.floor(Math.random() * characters.length);
    randomPass1 = randomPass1 + characters[randomIndexNumber];
    randomPass2 = randomPass2 + characters[randomIndexNumber2];
  }
  paragraph1EL.textContent = randomPass1;
  paragraph2EL.textContent = randomPass2;
  reset();
}

function reset() {
  randomPass1 = "";
  randomPass2 = "";
}
