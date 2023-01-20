
  // Get the login button by its id
  var loginBtn = document.getElementById("loginBtn");

  // Add a click event listener to the login button
  loginBtn.addEventListener("click", function() {
    // Create a div element for the window
    var window = document.createElement("div");
    // Add a class for styling
    window.classList.add("login-window");
    // Create a form element
    var form = document.createElement("form");
    // Create a label and input element for the username
    var usernameLabel = document.createElement("label");
    usernameLabel.innerHTML = "Username: ";
    var usernameInput = document.createElement("input");
    usernameInput.type = "text";
    // Append the label and input to the form
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    // Create a label and input element for the password
    var passwordLabel = document.createElement("label");
    passwordLabel.innerHTML = "Password: ";
    var passwordInput = document.createElement("input");
    passwordInput.type = "password";
    // Append the label and input to the form
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    // Create a sign in button
    var signInBtn = document.createElement("button");
    signInBtn.innerHTML = "Sign In";
    // Append the button to the form
    form.appendChild(signInBtn);
    // Append the form to the window
    window.appendChild(form);
    // Append the window to the body
    document.body.appendChild(window);
  });