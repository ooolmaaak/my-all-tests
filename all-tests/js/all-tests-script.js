const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
  alert(`${username.value} ${password.value}`);
});
