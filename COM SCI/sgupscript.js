document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.querySelectorAll('.required-msg').forEach(el => el.style.display = 'none');

  let valid = true;

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const sexEls = document.getElementsByName('sex');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const supportReason = document.getElementById('supportReason').value.trim();

  if (!firstName) {
    document.getElementById('firstNameReq').style.display = 'inline';
    valid = false;
  }
  if (!lastName) {
    document.getElementById('lastNameReq').style.display = 'inline';
    valid = false;
  }

  let sexValue = '';
  for (let i = 0; i < sexEls.length; i++) {
    if (sexEls[i].checked) {
      sexValue = sexEls[i].value;
      break;
    }
  }
  if (!sexValue) {
    document.getElementById('sexReq').style.display = 'inline';
    valid = false;
  }

  if (!email) {
    document.getElementById('emailReq').style.display = 'inline';
    valid = false;
  }
  if (!password) {
    document.getElementById('passwordReq').style.display = 'inline';
    valid = false;
  }
  if (!supportReason) {
    document.getElementById('supportReq').style.display = 'inline';
    valid = false;
  }

  if (valid) {
    const userData = {
      firstName,
      lastName,
      sex: sexValue,
      email,
      password,
      contact,
      supportReason
    };

    localStorage.setItem('currentUser', email);
    localStorage.setItem(`user_${email}`, JSON.stringify(userData));

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('sex', sexValue);
    localStorage.setItem('email', email);
    localStorage.setItem('supportReason', supportReason);

    window.location.href = 'user profile.html';
  }
});
