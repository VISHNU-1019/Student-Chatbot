const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("userInput");

let responses = JSON.parse(localStorage.getItem("chatbotResponses")) || {
    "semester": "The new semester starts on September 1st.",
    "events": "Check our college website for upcoming events.",
    "library": "The library is open from 8 AM to 8 PM on weekdays.",
    "admission": "Admissions are open from June to August.",
    "fees": "Fee payment deadline is August 15th.",
};

// Function to send a message
function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    if (!message) return;

    addChatMessage("👨‍🎓 You: " + message);
    
    // Check if the response exists in chatbot
    let response = responses[message] || "Sorry, I don't have information about that.";
    setTimeout(() => addChatMessage("🤖 Chatbot: " + response), 500);

    userInput.value = "";
}

// Function to add chat messages to chatbox
function addChatMessage(message) {
    const msgElement = document.createElement("p");
    msgElement.innerText = message;
    chatMessages.appendChild(msgElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function for admin to add a response
function addResponse() {
    const keyword = document.getElementById("keywordInput").value.trim().toLowerCase();
    const response = document.getElementById("responseInput").value.trim();

    if (!keyword || !response) {
        alert("Please enter both keyword and response!");
        return;
    }

    responses[keyword] = response;
    localStorage.setItem("chatbotResponses", JSON.stringify(responses));
    alert("Response added successfully!");

    document.getElementById("keywordInput").value = "";
    document.getElementById("responseInput").value = "";
}
