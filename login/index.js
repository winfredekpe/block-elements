// grabbing elememnts
firstname = document.querySelector("#firstname");
lastname = document.querySelector("#lastname");
email = document.querySelector("#email");
password = document.querySelector("#password");
retypepassword = document.querySelector("#retypepassword");
submit = document.querySelector(".btn");

// adding event listenres
firstname.addEventListener("input", checkfn);
lastname.addEventListener("input", checkfn);
email.addEventListener("input", checkfn);
password.addEventListener("input", checkfn);
retypepassword.addEventListener("input", checkpassword);

// functions

function checkfn(e) {
  input = this.value;
  if (input === "") {
    if (this.parentNode.firstElementChild.firstElementChild) {
      this.parentNode.firstElementChild.removeChild(div);
      div = document.createElement("div");
      i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-question-circle");
      i.classList.add("fail");
      div.appendChild(i);
      this.parentNode.firstElementChild.appendChild(div);
    } else {
      this.parentNode.firstElementChild.appendChild(div);
    }
  } else {
    if (this.parentNode.firstElementChild.firstElementChild) {
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.remove(
        "fa-check-circle"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.remove(
        "fail"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.add(
        "fa-check-circle"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.add(
        "pass"
      );
    } else {
      div = document.createElement("div");
      i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-check-circle");
      i.classList.add("pass");
      div.appendChild(i);
      this.parentNode.firstElementChild.appendChild(div);
    }
  }
}

function checkpassword() {
  passval = password.value;
  retypeval = retypepassword.value;
  if (passval !== retypeval) {
    if (this.parentNode.firstElementChild.firstElementChild) {
      this.parentNode.firstElementChild.removeChild(div);
      div = document.createElement("div");
      i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-question-circle");
      i.classList.add("fail");
      div.appendChild(i);
      this.parentNode.firstElementChild.appendChild(div);
    } else {
      this.parentNode.firstElementChild.appendChild(div);
    }
  } else {
    if (this.parentNode.firstElementChild.firstElementChild) {
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.remove(
        "fa-check-circle"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.remove(
        "fail"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.add(
        "fa-check-circle"
      );
      this.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.add(
        "pass"
      );
    } else {
      div = document.createElement("div");
      i = document.createElement("i");
      i.classList.add("fas");
      i.classList.add("fa-check-circle");
      i.classList.add("pass");
      div.appendChild(i);
      this.parentNode.firstElementChild.appendChild(div);
    }
  }
}
