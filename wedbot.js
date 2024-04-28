
        //Predefined questions and responses
        const responses = {
            "hi": "Hello! Welcome to Posh Weddings. How can we assist you today?",
            "Hi": "Hello! Welcome to Posh Weddings. How can we assist you today?",
            "hello": "Hi there! Welcome to Posh Weddings. How can we help you plan your dream wedding?",
            "Hello": "Hi there! Welcome to Posh Weddings. How can we help you plan your dream wedding?",
            "what is posh weddings?": "Posh Weddings is your premier destination for luxury wedding planning services.We specialize in creating unforgettable experiences tailored to your unique style and vision. From elegant venues to exquisite decor and flawless coordination, we're here to bring your dream wedding to life. Explore our services and start planning your perfect day with us today!",
            "What is Posh Weddings?":"Posh Weddings is your premier destination for luxury wedding planning services.We specialize in creating unforgettable experiences tailored to your unique style and vision. From elegant venues to exquisite decor and flawless coordination, we're here to bring your dream wedding to life. Explore our services and start planning your perfect day with us today!",
            "how are you": "I'm fine, thank you!",
            "what is your name": "I'm a wedbot.I'm here to assist you",
            "How can I contact you?":"There is a contact us page on our home page u may go there and fill the form our team will soon contact you:)",
            "how can i contact you?":"There is a contact us page on our home page u may go there and fill the form our team will soon contact you:)",      
            // Add more predefined questions and responses here
        };

        // Function to send user message and get response
        function sendMessage() {
            const userInput = document.getElementById("user-input").value.toLowerCase();
            const chatLog = document.getElementById("chat-log");

            // Display user message
            const userMessageElement = document.createElement("p");
            userMessageElement.textContent = "You: " + userInput;
            chatLog.appendChild(userMessageElement);

            // Check if predefined response exists
            if (responses[userInput]) {
                // Display bot response
                const botMessageElement = document.createElement("p");
                botMessageElement.textContent = "wedbot: " + responses[userInput];
                chatLog.appendChild(botMessageElement);
            } else {
                // Display default response
                const botMessageElement = document.createElement("p");
                botMessageElement.textContent = "wedbot: I'm sorry, I don't understand.";
                chatLog.appendChild(botMessageElement);
            }

            // Clear user input
            document.getElementById("user-input").value = "";
        }
    
