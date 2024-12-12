function printHello() {
  //select inputs
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  //create container div
  const containerElement = document.createElement("div");

  //create container elements
  const welcomeElement = document.createElement("p");
  const usernameElement = document.createElement("p");
  const passwordElement = document.createElement("p");

  //insert contents into elements
  welcomeElement.innerText = "Bro this website is sick af!";
  usernameElement.innerText = "Your username is: " + username;
  passwordElement.innerText = "Here's your password: " + password;

  //Add content elements into container div
  if (password.length < 8) {
    errorMessage.innerText = "Password must contain atleast 8 characters.";
  }
  if (username === "" && password === "") {
    errorMessage.textContent = "Username and password cannot be empty.";
  } else if (username === "" && password !== "") {
    errorMessage.textContent = "Username cannot be empty.";
  } else if (username !== "" && password === "") {
    errorMessage.textContent = "Password cannot be empty.";
  } else {
    errorMessage.textContent = ""; // Clear any previous error message
    // Proceed with form submission or further processing
    containerElement.appendChild(welcomeElement);
    containerElement.appendChild(usernameElement);
    containerElement.appendChild(passwordElement);
  }

  document.body.appendChild(containerElement);
}
