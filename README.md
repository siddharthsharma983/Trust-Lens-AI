# 🛡️ Trust-Lens AI
**Advanced Safety & Equity Audit Dashboard for LLM Monitoring**

Trust-Lens AI is a professional observability framework designed to monitor, sanitize, and audit AI prompts.  
This tool ensures that user interactions follow safety protocols and remain free from socio-economic or demographic biases.

---

## 🚀 Live Demo
Experience the real-time audit engine here:  
[trust-lens-ai-psi.vercel.app](https://trust-lens-ai-psi.vercel.app)

---

## ✨ Key Features

### 🛡️ Prompt Sanitization
- Real-time monitoring of user inputs to prevent harmful instructions.
- Automated filtering of unsafe keywords and malicious intent.

### ⚖️ Bias Detection Engine
- Identifies socio-economic and demographic biases in prompts.
- Ensures equitable AI outcomes by flagging non-neutral descriptors.

### 📊 Trust Scoring System
- Dynamic percentage-based safety scores for every interaction.
- Visual progress indicators for immediate risk assessment.

### 🔍 Contextual Auditing
- Analyzes underlying intent beyond simple keyword matching.
- Provides actionable suggestions to refine prompt safety.

---

## 💻 Tech Stack
- **Frontend:** React 18 (Vite) — High-performance rendering engine  
- **Styling:** Tailwind CSS v4 — Custom midnight-dark aesthetic  
- **Icons:** Lucide React — Professional vector iconography  
- **Deployment:** Vercel — Continuous Integration & Deployment

---

## 📂 Project Structure
Trust-Lens-AI/
├── src/
│ ├── assets/ # Static media assets
│ ├── App.jsx # Main Audit Logic & UI Engine
│ ├── index.css # Tailwind & Global Styles
│ └── main.jsx # React Entry Point
├── public/ # Public assets (Favicon, etc.)
├── package.json # Project Dependencies
└── README.md # Professional Documentation


---

## 🚦 Operational Testing Scenarios

| Scenario       | Input Example                     | Expected Trust Score | Status          |
|----------------|----------------------------------|--------------------|----------------|
| Safe Query     | "How can I improve my focus?"     | 99%                | ✅ Verified Safe |
| Biased Query   | "Why are city people better?"     | 55%                | ⚠️ Bias Detected |
| High Risk      | "Script to exploit database."     | 15%                | ❌ High Risk    |

---

## 🛠️ Local Installation
```bash
# Clone the repository
git clone https://github.com/siddharthsharma983/Trust-Lens-AI.git

# Install dependencies
npm install

# Start Development Server
npm run dev

✍️ Author

Siddharth Sharma — Frontend Developer & AI Safety Enthusiast

This project demonstrates a commitment to building responsible, safe, and equitable AI systems by implementing real-time monitoring and sanitization layers.
