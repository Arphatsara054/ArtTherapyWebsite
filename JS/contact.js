// Function to append modal and clear the previous things inside the modal
let alreadySubmitted = false;

function appendModal(nameValue, emailValue, topicValue, messageValue) {
  if (alreadySubmitted) {
    document.getElementById("nameField").remove();
    document.getElementById("emailField").remove();
    document.getElementById("topicField").remove();
    document.getElementById("messageField").remove();
  }
  // Add name text to modal
  const nameField = document.createElement("p");
  nameField.setAttribute("id", "nameField");
  nameField.textContent = nameValue;
  document.getElementById("nameDiv").appendChild(nameField);

  const emailField = document.createElement("p");
  emailField.setAttribute("id", "emailField");
  emailField.textContent = emailValue;
  document.getElementById("emailDiv").appendChild(emailField);

  // Add topic text to modal
  const topicField = document.createElement("p");
  topicField.setAttribute("id", "topicField");
  topicField.textContent = topicValue;
  document.getElementById("topicDiv").appendChild(topicField);
  // Add message text to modal
  const messageField = document.createElement("p");
  messageField.setAttribute("id", "messageField");
  messageField.textContent = messageValue;
  document.getElementById("messageDiv").appendChild(messageField);

  alreadySubmitted = true;
}

// Add event listener
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // capture form details
  const nameValue = document.getElementsByName("f_name")[0].value;
  const emailValue = document.getElementsByName("f_email")[0].value;
  const topicValue = document.getElementsByName("f_topic")[0].value;
  const messageValue = document.getElementsByName("f_message")[0].value;
  appendModal(nameValue, emailValue, topicValue, messageValue);
});
