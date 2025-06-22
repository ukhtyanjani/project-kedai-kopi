// Toggle class active untuk hambuger menu
const navbarnav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilang nav
const hamburger = document.querySelector("#hamburger-menu");
// toggle class active untuk search form
const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchform.classList.toggle("active");
  searchbox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart
const shoppingcart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingcart.classList.toggle("active");
  e.preventDefault();
};
// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingcart.contains(e.target)) {
    shoppingcart.clasList.remove("active");
  }
});

// Modal Box
const itemdetailmodal = document.querySelector("#item-detail-modal");
const itemdetailbuttons = document.querySelectorAll(".item-detail-button");

itemdetailbuttons.forEach((btn) => {
  btn.onclick = (e) => {
    itemdetailmodal.style.display = "flex";
    e.preventDefault();
  };
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemdetailmodal) {
    itemdetailmodal.style.display = "none";
  }
};
