const chatBox = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Add message to chat
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add(sender === "bot" ? "bot-message" : "user-message");
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Mental health chatbot responses
function generateReply(input) {
    const text = input.toLowerCase();

    const responses = [
        {
            k: ["hi", "hello", "hey"],
            r: "Hello! 🌼 How are you feeling today?"
        },

        {
            k: ["sad", "depressed", "down", "not okay"],
            r: "I'm really sorry you're feeling this way. 💛 Do you want to talk about what's making you feel sad?"
        },

        {
            k: ["anxiety", "anxious", "panic", "worried","family problems"],
            r: "Anxiety can feel overwhelming. 🌿 Try taking a slow, deep breath with me. What triggered your anxiety today?"
        },

        {
            k: ["stress", "stressed", "pressure"],
            r: "Stress can build up quietly. 😞 What’s been stressing you out lately?"
        },

        {
            k: ["i always feel alone", "loneliness", "isolated"],
            r: "You’re not alone. 💕 I'm here with you. What’s making you feel this way?"
        },

        {
            k: ["angry", "mad", "frustrated"],
            r: "It’s okay to feel angry. Your emotions are valid. 😔 What happened?"
        },

        {
            k: ["tired", "exhausted", "drained"],
            r: "It sounds like you're carrying a lot. 😔 When was the last time you rested or took a break?"
        },

        {
            k: ["thank you", "thanks"],
            r: "You're welcome! 💛 I’m always here to listen."
        },

        {
            k: ["help", "need help"],
            r: "I’m here to support you. Can you tell me more about what you’re going through?"
        }
    ];

    // Check for matching responses
    for (let item of responses) {
        if (item.k.some(keyword => text.includes(keyword))) {
            return item.r;
        }
    }

    // Default reply
    return "I’m here to listen. 💛 Tell me more about what you’re feeling.";
}

// Send button click
sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text === "") return;

    addMessage(text, "user");

    const reply = generateReply(text);
    setTimeout(() => addMessage(reply, "bot"), 500);

    userInput.value = "";
});