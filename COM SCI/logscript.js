document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errorMsg = document.getElementById('emailError');
  errorMsg.style.display = 'none';

  if (!email || !password) {
    errorMsg.innerText = 'Please fill in both email and password.';
    errorMsg.style.display = 'inline';
    return;
  }

  const storedUser = localStorage.getItem(`user_${email}`);
  if (!storedUser) {
    errorMsg.innerText = 'No account found with that email.';
    errorMsg.style.display = 'inline';
    return;
  }

  const userData = JSON.parse(storedUser);

  if (userData.password !== password) {
    errorMsg.innerText = 'Incorrect password.';
    errorMsg.style.display = 'inline';
    return;
  }

  // Successful login: set current user and redirect
  localStorage.setItem('currentUser', email);
  localStorage.setItem('firstName', userData.firstName);
  localStorage.setItem('lastName', userData.lastName);
  localStorage.setItem('sex', userData.sex);
  localStorage.setItem('email', userData.email);
  localStorage.setItem('supportReason', userData.supportReason);

  window.location.href = 'proj_profile_lastname.html';
});
