document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Hide all required messages initially
  document.querySelectorAll('.required-msg').forEach(el => el.style.display = 'none');

  let valid = true;

  // Get form values trimmed
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const sexEls = document.getElementsByName('sex');
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const supportReason = document.getElementById('supportReason').value.trim();

  // Check required fields
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
 
