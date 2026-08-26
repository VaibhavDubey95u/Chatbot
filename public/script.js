const inputText = document.getElementById("input-text");
const buttonSend = document.getElementById("button-send");
const message = document.querySelector(".messages");

// handle press enterr key
inputText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    buttonSend.click();
  }
});

buttonSend.addEventListener("click", async () => {
  if (inputText.value.trim() === "") {
    return;
  }

  // user message
  // save user message
  const userMessage = inputText.value.trim();
  const newElement = document.createElement("div");
  newElement.innerText = inputText.value;
  newElement.classList.add("user-message");
  message.appendChild(newElement);

  // Scroll to bottom
    message.scrollTop = message.scrollHeight;

  // clear input
  inputText.value = "";

  // loading effect
  const loadingMessage = document.createElement("div");
  loadingMessage.classList.add("bot-message");
  message.appendChild(loadingMessage);

  // Loading animation
  let dots = 1;

  loadingMessage.innerText = "🤖 Thinking.";

  const loadingInterval = setInterval(() => {
    dots++;

    if (dots > 3) {
      dots = 1;
    }

    loadingMessage.innerText = "🤖 Thinking" + ".".repeat(dots);
  }, 400);

  // Scroll to bottom
  message.scrollTop = message.scrollHeight;

  // request to backend
  try {
    const response = await fetch("/api/chat", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        message: userMessage,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response from server");
    }

    const data = await response.json();

    // Stop loading animation
    clearInterval(loadingInterval);

    // remove loading
    loadingMessage.remove();

    //bot messafge

    const botMessage = document.createElement("div");
    botMessage.innerHTML = marked.parse(data.answer);
    botMessage.classList.add("bot-message");
    message.appendChild(botMessage);

    // Scroll to bottom
    message.scrollTop = message.scrollHeight;
  } catch (error) {
    console.error(error);
    // Stop loading animation
    clearInterval(loadingInterval);
    loadingMessage.remove();
    const botElement = document.createElement("div");
    botElement.innerText = "Sorry, something went wrong. Please try again.";
    message.appendChild(botElement);
  }
});
