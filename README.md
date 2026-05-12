# AI Support Assistant (GenAI Project)

## 📌 Overview
AI Support Assistant is a Generative AI-powered backend system built using Node.js and OpenAI API.  
It simulates an intelligent support agent that can understand user queries and generate structured, human-like responses.

The project demonstrates how Large Language Models (LLMs) can be integrated into real-world applications for automation, support systems, and decision assistance.

---

## 🚀 Features

- 🔹 AI-powered response generation using OpenAI API (LLMs)
- 🔹 Intelligent system prompt design for structured outputs
- 🔹 REST API backend for easy integration
- 🔹 Fallback mechanism for API failures
- 🔹 Modular and scalable backend architecture
- 🔹 Simulated AI agent behavior for support automation

---

## 🧠 Key Concepts Used

- Generative AI (LLMs)
- Prompt Engineering
- AI Agent Workflow (basic)
- REST API Development
- Backend System Design
- Error Handling & Fallback Logic

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- OpenAI API
- JavaScript
- REST APIs

---

## 📁 Project Structure
AI-Support-Assistant/
│
├── server.js
├── package.json
├── .env
│
├── config/
│ └── openai.js
│
├── controllers/
│ └── chatController.js
│
├── routes/
│ └── chatRoutes.js
│
└── utils/
└── fallback.js

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://[github.com/your-username/AI-Support-Assistant.git](https://github.com/RitikaSaha14/AI-SupportAssistant)
```
## Navigate to project folder
cd AI-Support-Assistant

## Install dependencies
npm install

## Create .env file
OPENAI_API_KEY=your_api_key_here
PORT=5000

## Run the server
npm start

## API Endpoint
Request Body:

{
  "message": "What is artificial intelligence?"
}

Response:

{
  "success": true,
  "reply": "Artificial Intelligence refers to..."
}

## How It Works
* User sends a message via API request
* Backend processes input using OpenAI LLM
* System prompt guides AI response behavior
* AI generates structured reply
* Fallback system handles errors if API fails
## Use Case

This project demonstrates how Generative AI can be used in:

* Customer support automation
* Enterprise query handling systems
* AI assistant development
* Workflow automation using LLMs

## Future Improvements
* Add frontend chatbot UI (React)
* Implement streaming responses
* Add user authentication
* Convert into RAG-based knowledge assistant
* Deploy on cloud (Render/Vercel)

## Author

Ritika Saha
B.Tech Computer Science Engineering
GitHub: https://github.com/RitikaSaha14

LinkedIn: https://linkedin.com/in/ritika-saha-b87975202

## Note

This project is built for learning and demonstration of Generative AI + backend integration concepts using OpenAI API.
