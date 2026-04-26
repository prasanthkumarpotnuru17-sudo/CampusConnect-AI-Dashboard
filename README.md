# CampusConnect AI – Ambassador Growth Engine

**CampusConnect AI** is an intelligent, gamified platform designed to track, manage, and optimize the performance of campus ambassadors. Moving beyond a basic dashboard, it provides a comprehensive suite of tools for real-time tracking, AI-driven insights, and developer-focused metrics integration.

## 🎥 Project Demo

https://github.com/user-attachments/assets/4c87e856-09e9-432f-887d-779d2f760376
## 🚀 Key Features

- **AI-Driven Performance Tracking:** Dynamic, forward-looking AI suggestion system that provides actionable guidance and personalized insights for ambassadors.
- **Mission-Based Task Management:** Interactive missions with real-time Growth Score updates upon completion, complete with alert-based feedback.
- **GitHub Intelligence Analyzer:** Deep integration with GitHub to display specific, high-impact profile metrics (e.g., Score, Repositories, Activity levels) and actionable suggestions.
- **Live Competitive Leaderboard:** Gamified ranking system to encourage healthy competition and engagement among campus ambassadors.
- **Admin Program Oversight:** A dedicated admin panel for seamless program management, data visualization, and overall oversight.
- **Premium UI/UX:** Clean, futuristic, and mobile-friendly interface designed for a high-impact user experience.

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS v4
- **Animations:** Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **AI Integration:** Google GenAI (Gemini API)

## 🏃‍♂️ Run Locally

**Prerequisites:** Node.js installed on your machine.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory (you can copy from `.env.example` if available) and set your Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:3000` to view the application.

## 📂 Project Structure

- `src/components`: Reusable UI components and widgets.
- `src/pages`: Main application views (Dashboard, Leaderboard, Admin, etc.).
- `src/App.tsx`: Main application routing and layout.
- `src/index.css`: Global styles and Tailwind configuration.