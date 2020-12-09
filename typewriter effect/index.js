field = document.querySelector(".field");
wordlist = field.getAttribute("data-words");
words = JSON.parse(wordlist);
wait = 350;
iterator = 0;
index = 0;
currentword = "";
letter = "";

function type() {
  if (iterator === words.length) {
    iterator = 0;
  }
  currentword = words[iterator];
  letter = currentword.slice(0, index++);
  field.innerText = letter;
  if (letter.length === currentword.length) {
    iterator++;
    index = 0;
  }
  setTimeout(type, wait);
}

type();
