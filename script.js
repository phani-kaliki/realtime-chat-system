function sendMessage(user) {
  // Get Message Content from text input
  const messageInput = document.getElementById("user-" + user + "-input");
  let message = messageInput.value.trim();
  if (message === "") return; // Return if text is empty

  // Replace newlines in text with <br>
  message = message.replace("\n", "<br>"); 

  // Select the chat-messages class and loop them using forEach
  const chatMessages = document.querySelectorAll(".chat-messages");
  chatMessages.forEach((chat) => {
    // Create the message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("user-" + user + "-message");
    messageElement.innerHTML = message;

    // Add the message element in chat area
    chat.appendChild(messageElement);
  });
  messageInput.value = ""; // clear the text input

  // Scroll to end in chat areas
  const chatAreas = document.getElementsByClassName("chat-area");
  for (let i = 0; i < chatAreas.length; i++) {
    const ca = chatAreas.item(i);
    ca.scrollTop = ca.scrollHeight;
  }
}

// Add event listeners for send buttons
document
  .getElementById("send-button-A")
  .addEventListener("click", () => sendMessage("A"));
document
  .getElementById("send-button-B")
  .addEventListener("click", () => sendMessage("B"));
