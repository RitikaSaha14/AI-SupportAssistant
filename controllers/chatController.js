const openai = require("../config/openai");
const fallbackResponse = require("../utils/fallback");

const getAIResponse = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                reply: "Message is required"
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are an AI Support Assistant. Give clear, structured answers."
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
        });

        const reply = response.choices[0].message.content;

        return res.json({
            success: true,
            reply
        });

    } catch (error) {
        return res.json({
            success: false,
            reply: fallbackResponse()
        });
    }
};

module.exports = { getAIResponse };
