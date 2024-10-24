// Button MODAL lesson 9
// var modal = document.querySelector(".modal-container");
// var button = document.querySelector("button");
// var btnClose = document.querySelector("span");

// if (button) {
//     button.addEventListener("click", function() {
//       modal.style.visibility = "visible";
//     });
//   }

//   if (btnClose) {
//     btnClose.addEventListener("click", function() {
//        modal.style.visibility = "hidden";
//     });
//   }

// BUTTON MODAL CONTACT.HTML
var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');
var btnClose = document.querySelector("span");

if (btnSubmit) {
  btnSubmit.addEventListener('click', function () {
    modal.classList.add('show');

    const next = document.querySelector('.next');
    next.setAttribute('value', 'https://cobee-the-junior-programmer.netlify.app/contact.html');
  });
}

if (btnClose) {
    btnClose.addEventListener("click", function() {
      modal.style.visibility = "hidden";
    });
  }