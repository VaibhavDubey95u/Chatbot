# 🤖 CodeMentor — AI Coding Tutor

> An AI-powered coding tutor built with **Node.js, Express, and Google Gemini** to help learners understand programming, debug code, learn computer science concepts, and improve their software-engineering skills.

## 🌐 Live Demo

**CodeMentor:** chatbot-three-jet-16.vercel.app

---

## 📌 Overview

**CodeMentor** is a focused AI coding assistant designed specifically for programming and computer-science learning.

Instead of acting as a general-purpose chatbot, the application uses a carefully defined system instruction that guides Gemini to behave like an **expert, encouraging, and patient coding tutor**.

The assistant focuses on:

* Programming concepts
* Debugging
* Clean code
* Data Structures & Algorithms
* Web and mobile development
* Programming languages
* Frameworks
* Software engineering
* System architecture
* Problem-solving techniques

The application uses a Node.js/Express backend to securely communicate with the **Google Gemini API**, while the frontend is served from the application's `public/` directory.

---

## ✨ Features

### 🤖 AI-Powered Coding Assistance

Uses Google's Gemini API with the:

```text
gemini-2.5-flash
```

model to generate coding-related responses.

### 👨‍💻 Dedicated Coding Tutor

The assistant is configured as **CodeMentor**, an AI coding tutor rather than a general chatbot.

It is instructed to help users:

* Understand programming concepts
* Debug code
* Write cleaner software
* Develop problem-solving skills
* Understand why a solution works

### 🎯 Strict Coding Scope

The system instruction restricts the assistant to topics such as:

* Computer Science
* Software Engineering
* Programming Languages
* Frameworks
* Data Structures
* Algorithms
* Web Development
* Mobile Development
* System Architecture

For unrelated topics, the assistant is instructed to politely refuse and redirect the conversation toward programming.

### 🐛 Structured Debugging Guidance

When users provide buggy code, CodeMentor follows a structured approach:

1. **The Issue** — Identify what went wrong.
2. **The Fix** — Provide the corrected implementation.
3. **Key Takeaway** — Explain what to remember.

### 📚 Learning-Oriented Responses

The system prompt encourages the assistant to explain the **"why"**, not simply provide code.

It also encourages:

* Step-by-step explanations
* Best practices
* Readable code
* Proper naming
* Edge-case awareness
* Algorithm tracing

### 🔐 Security-Oriented AI Instructions

The system prompt explicitly prevents the assistant from generating:

* Malicious code
* Malware
* Exploits
* Deliberate security vulnerabilities

### 🌐 REST API

The backend exposes a simple chat endpoint:

```http
POST /api/chat
```

The endpoint accepts a user's message and returns the generated AI response.

### ⚠️ Input Validation

Empty or missing messages are rejected with:

```http
400 Bad Request
```

and the response:

```json
{
  "error": "Message is required"
}
```

### 🔑 Environment-Based API Key

The Gemini API key is loaded through an environment variable:

```env
GEMINI_API_KEY=your_api_key
```

This keeps the API credential outside the source code.

---

## 🛠️ Tech Stack

| Technology                  | Purpose                         |
| --------------------------- | ------------------------------- |
| **Node.js**                 | JavaScript runtime              |
| **Express.js**              | Backend web framework           |
| **Google Gemini API**       | AI response generation          |
| **@google/genai**           | Google GenAI SDK                |
| **dotenv**                  | Environment-variable management |
| **JavaScript (ES Modules)** | Application development         |
| **HTML/CSS/JavaScript**     | Frontend interface              |

The repository's `package.json` confirms the project uses `express`, `@google/genai`, and `dotenv`, with ES modules enabled.

---

## 🏗️ Architecture

```text
┌───────────────────────────┐
│       User Interface      │
│        public/             │
└─────────────┬─────────────┘
              │
              │ HTTP POST
              │ /api/chat
              ▼
┌───────────────────────────┐
│      Express Server       │
│          app.js           │
└─────────────┬─────────────┘
              │
              │ User Message
              ▼
┌───────────────────────────┐
│     Google GenAI SDK      │
│      @google/genai        │
└─────────────┬─────────────┘
              │
              │ API Request
              ▼
┌───────────────────────────┐
│     Gemini 2.5 Flash      │
│      AI Model             │
└─────────────┬─────────────┘
              │
              │ Generated Answer
              ▼
┌───────────────────────────┐
│      Express Response     │
│     { answer: ... }       │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       Chat Interface      │
└───────────────────────────┘
```

---

## 📂 Project Structure

```text
Chatbot/
│
├── public/
│   └── Frontend files
│
├── app.js
│   ├── Express server
│   ├── Gemini configuration
│   ├── CodeMentor system instruction
│   ├── /api/chat endpoint
│   ├── Request validation
│   └── Error handling
│
├── .gitignore
│
├── package.json
│
├── package-lock.json
│
└── README.md
```

---

## ⚙️ How It Works

### 1. User enters a message

The frontend collects the user's coding question.

Example:

```text
Explain binary search in JavaScript.
```

### 2. Frontend sends the request

The message is sent to:

```http
POST /api/chat
```

with a request body containing:

```json
{
  "message": "Explain binary search in JavaScript."
}
```

### 3. Express receives the request

The backend validates the message.

If the message is missing or empty, the server returns:

```http
400 Bad Request
```

### 4. Gemini processes the request

The backend sends the user's message to Gemini using:

```text
gemini-2.5-flash
```

along with the CodeMentor system instruction.

### 5. AI generates the response

Gemini generates a coding-focused answer according to the configured tutoring rules.

### 6. Backend returns the response

The API responds with:

```json
{
  "answer": "..."
}
```

### 7. Frontend displays the answer

The generated response is shown to the user through the chat interface.

---

## 🔐 Environment Variables

Create an environment file and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### Important

Never commit your real API key to GitHub.

Make sure your environment file is included in `.gitignore`.

---

## 🚀 Getting Started

### Prerequisites

Install:

* Node.js
* npm
* A Google Gemini API key

You can verify Node.js installation with:

```bash
node --version
```

and npm with:

```bash
npm --version
```

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/VaibhavDubey95u/Chatbot.git
```

### 2. Enter the project directory

```bash
cd Chatbot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the environment

Create your environment file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Start the application

For normal execution:

```bash
npm start
```

For development with automatic restart:

```bash
npm run dev
```

The available scripts are defined directly in `package.json`.

---

## 🔌 API Documentation

### POST `/api/chat`

Generates a coding-related AI response.

#### Request

```json
{
  "message": "What is a binary tree?"
}
```

#### Successful Response

```json
{
  "answer": "A binary tree is..."
}
```

#### Missing Message

```json
{
  "error": "Message is required"
}
```

HTTP status:

```text
400
```

#### Server / Gemini Error

If communication with Gemini fails:

```json
{
  "error": "Something went wrong while communicating with Gemini."
}
```

HTTP status:

```text
500
```

The endpoint behavior and validation are implemented in `app.js`.

---

## 🧠 CodeMentor System Design

One of the important parts of this project is the system instruction used to define the AI's behavior.

The assistant is given the identity:

```text
CodeMentor
```

and is instructed to behave as an:

> Expert, encouraging, and patient AI Coding Tutor.

The instruction defines four major areas:

### 1. Scope

Only programming and computer-science-related topics.

### 2. Teaching Philosophy

The assistant should explain:

```text
Why → How → Solution
```

rather than simply dumping code.

### 3. Debugging Method

```text
The Issue
     ↓
The Fix
     ↓
Key Takeaway
```

### 4. Safety / Security

The assistant is instructed not to generate malicious code, malware, exploits, or deliberate security vulnerabilities.

---

## 💡 Example Questions

You can use CodeMentor for questions such as:

```text
What is recursion?
```

```text
Explain binary search with an example.
```

```text
Why is my JavaScript code returning undefined?
```

```text
Explain the difference between let, const and var.
```

```text
How does a REST API work?
```

```text
Explain time complexity of merge sort.
```

```text
Help me debug this React component.
```

---

## 📈 Learning Objectives

This project demonstrates practical experience with:

* Node.js backend development
* Express.js REST APIs
* Generative AI integration
* Google Gemini API
* Environment-variable management
* API request/response handling
* Input validation
* Error handling
* System prompting
* AI response control
* Static frontend serving
* ES Modules
* Full-stack application structure

---

## 🔄 Request Flow

```text
User
 │
 ▼
Chat Interface
 │
 ▼
POST /api/chat
 │
 ▼
Express.js
 │
 ├── Validate message
 │
 ▼
CodeMentor System Instruction
 │
 ▼
Google Gemini API
 │
 ▼
Gemini 2.5 Flash
 │
 ▼
AI Generated Response
 │
 ▼
Express JSON Response
 │
 ▼
Chat Interface
```

---

## 🧪 Error Handling

The application handles common API failures.

### Empty message

```text
400 Bad Request
```

### Gemini/API failure

```text
500 Internal Server Error
```

The backend also logs Gemini-related errors to the server console for debugging.

---

## 🚧 Future Improvements

Potential extensions for the project include:

* 💬 Conversation history
* 🧠 Multi-turn context
* 👤 User authentication
* 💾 Persistent chat storage
* 📝 Markdown rendering
* 💻 Syntax-highlighted code blocks
* 📋 Copy-code functionality
* 🌙 Dark/light theme
* 📎 File/code upload
* ⚡ Streaming AI responses
* 🔒 API rate limiting
* 📊 Usage monitoring
* 🧪 Automated API tests
* 📱 Improved mobile experience

---

## 🎯 Project Purpose

The main goal of this project is to explore how a **Generative AI model can be integrated into a web application and controlled through system-level instructions** to create a specialized educational assistant.

Rather than building only a generic chatbot, the project focuses on designing a specific AI persona and response behavior for **software-development education**.

---

## 👨‍💻 Author

**Vaibhav Dubey**

Software Engineering enthusiast focused on:

* Full-Stack Development
* AI / Machine Learning
* Generative AI
* Data Structures & Algorithms
* Software Engineering

---

## ⭐ Project Highlights

```text
Node.js
   +
Express.js
   +
Google Gemini
   +
System Prompt Engineering
   +
REST API
   +
Coding Education
   =
CodeMentor
```

If you find the project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project currently uses the **ISC License** as specified in `package.json`.
