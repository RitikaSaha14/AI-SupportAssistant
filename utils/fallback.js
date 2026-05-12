const fallbackResponse = () => {
    const responses = [
        "I'm unable to process your request right now.",
        "System is busy, please try again later.",
        "I couldn't generate a response at the moment."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
};

module.exports = fallbackResponse;
