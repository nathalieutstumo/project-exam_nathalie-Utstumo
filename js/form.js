const submit = document.querySelector('#submit');

const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const contentError = document.querySelector('.contentError');
const successMessage = document.querySelector('.successMessage');


submit.onclick = function (event) {

event.preventDefault();

let ok = true;
const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const content = document.querySelector('#content').value.trim();

if (name.length > 5) {
nameError.classList.add('hide');
nameError.classList.remove('show');
} else {
nameError.classList.add('show');
nameError.classList.remove('hide');
ok = false;
}

if (validateEmail(email)) {
emailError.classList.add('hide');
emailError.classList.remove('show');
} else {
emailError.classList.add('show');
emailError.classList.remove('hide');
ok = false;
}

  if (subject.length > 15) {
subjectError.classList.add('hide');
subjectError.classList.remove('show');
} else {
subjectError.classList.add('show');
subjectError.classList.remove('hide');
ok = false;
}

  if (content.length > 25) {
    contentError.classList.add('hide');
    contentError.classList.remove('show');
  } else {
    contentError.classList.add('show');
    contentError.classList.remove('hide');
ok = false;
}

if ( ok ) {
successMessage.classList.add('show');
}

};

function validateEmail(emailAdress) {
const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailExpression.test(emailAdress);
    console.log(isEmailValid);
return isEmailValid;
};
