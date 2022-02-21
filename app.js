//--------------------------loginform-------------------------------
const login_popup = document.querySelector(".hide");
document.querySelector(".login-signup").addEventListener("click", function () {
  login_popup.classList.remove("hide");
  cap(); //for generatiog new captcha
});

document.querySelector(".close-modal").addEventListener("click", function () {
  login_popup.classList.add("hide");
});

function toggleSignup() {
  document.getElementById("login-toggle").style.backgroundColor = "#fff";
  document.getElementById("login-toggle").style.color = "#222";
  document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
  document.getElementById("signup-toggle").style.color = "#fff";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
  cap(); //for generating new captcha
}

function toggleLogin() {
  document.getElementById("login-toggle").style.backgroundColor = "#57B846";
  document.getElementById("login-toggle").style.color = "#fff";
  document.getElementById("signup-toggle").style.backgroundColor = "#fff";
  document.getElementById("signup-toggle").style.color = "#222";
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

//for captcha purpose
function cap() {
  var alpha = [
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
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
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
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
  ];
  var a = alpha[Math.floor(Math.random() * 71)];
  var b = alpha[Math.floor(Math.random() * 71)];
  var c = alpha[Math.floor(Math.random() * 71)];
  var d = alpha[Math.floor(Math.random() * 71)];
  var e = alpha[Math.floor(Math.random() * 71)];
  var f = alpha[Math.floor(Math.random() * 71)];

  var final = a + b + c + d + e + f;
  document.getElementById("capt").value = final;
  document.getElementById("signup_capt").value = final;
}
function validcap() {
  var stg1 = document.getElementById("capt").value;
  var stg2 = document.getElementById("textinput").value;
  if (stg1 == stg2) {
    const username = document.getElementById("user-login").value;
    document.getElementById("replaceByUserName").innerHTML = username;
    document.querySelector("#login").classList.add("hide");
    document.querySelector(".profile-name").innerHTML = username;
    return true;
  } else {
    alert("Please enter a valid captcha");
    return false;
  }
}

// cart-section
function open_cart() {
  document.querySelector(".cart-section").style.display = "block";
}

document.getElementById("cart-close").addEventListener("click", function () {
  document.querySelector(".cart-section").style.display = "none";
});

function removeall() {
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
  document.querySelector(".new-item").style.display = "none";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
}

function add_to_cart_1() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item1").style.display = "flex";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart1").innerHTML = "Go to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_2() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item2").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart2").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_3() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item3").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart3").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart4").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function add_to_cart_4() {
  document.querySelector(".new-item").style.display = "block";
  document.querySelector(".empty-cart").style.display = "none";
  document.querySelector(".Action").style.display = "block";
  document.querySelector("#item4").style.display = "flex";
  document.querySelector("#item1").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector(".whole-checkout").style.display = "block";
  document.querySelector(".cart4").innerHTML = "Go to cart";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".cart3").innerHTML = "Add to cart";
  document.querySelector(".cart-section").style.display = "block";
}

function remove_1() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item1").style.display = "none";
  document.querySelector(".cart1").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_2() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item2").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_3() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item3").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function remove_4() {
  document.querySelector(".new-item").style.display = "none";
  document.querySelector("#item4").style.display = "none";
  document.querySelector(".cart2").innerHTML = "Add to cart";
  document.querySelector(".whole-checkout").style.display = "none";
  document.querySelector(".Action").style.display = "none";
  document.querySelector(".empty-cart").style.display = "block";
}

function logout() {
  window.location.reload();
}

//CONTACT US API
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      document.querySelector(".toast").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector(".toast").classList.add("hidden");
      }, 2000);

      setTimeout(() => {
        window.location.reload();
      }, 2010);
    });
});
