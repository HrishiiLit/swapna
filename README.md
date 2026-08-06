# 🏥 Swapna

## Smart Healthcare Platform

![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)
![Team](https://img.shields.io/badge/Team-4%20Members-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A full-stack, AI-powered healthcare web application designed to solve real-world medical challenges commonly seen in hackathon problem statements.

---

## 📌 About The Project

Swapna is a comprehensive healthcare platform that brings together patients, doctors, and administrators under one unified system.

The goal is to build a production-grade medical web application covering the most in-demand features in health-tech hackathons.

---

## 🚀 Key Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | Appointment Booking | Schedule, reschedule, and cancel appointments with doctors |
| 2 | Telemedicine | Real-time video consultations between patients and doctors |
| 3 | AI Disease Prediction | ML models that predict diseases from symptoms, reports, or images |
| 4 | Health Dashboard | Visualize patient health metrics and trends |
| 5 | E-Prescription | Digital prescriptions with medicine reminders |
| 6 | Electronic Health Records | Secure medical history storage |
| 7 | Role-Based Authentication | Separate portals for patients, doctors, admins |
| 8 | Hospital Finder | Location-based hospital search |
| 9 | Lab Report Analysis | OCR + AI-powered report parsing |
| 10 | Responsive Design | Mobile-first UI |

---

## 🧠 Suggested Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React.js / Next.js, Tailwind CSS, Chart.js |
| Backend | Node.js + Express / FastAPI |
| Database | PostgreSQL, MongoDB, Redis |
| ML / AI | Python, scikit-learn, TensorFlow / PyTorch |
| Auth | JWT, OAuth 2.0, bcrypt |
| Video Calls | WebRTC / Twilio / Agora |
| DevOps | Docker, GitHub Actions |
| Cloud | AWS / GCP / Azure |

---

## 👥 Team Structure

### 🎨 Member 1 — Frontend & UI/UX
- Build all pages (landing, dashboard, appointments, admin panel)
- Create reusable UI components
- Connect frontend to backend APIs
- Build dashboards and video UI
- Ensure responsive design

### 🛠 Member 2 — Backend & API
- Build RESTful APIs
- Implement JWT authentication
- Write business logic
- Handle file uploads
- Integrate ML service

### 🗄 Member 3 — Database
- Design ER diagrams
- Create ORM models
- Write migrations
- Optimize queries
- Implement caching

### 🤖 Member 4 — ML & DevOps
- Train disease prediction models
- Build medical image classification models
- Create OCR pipeline
- Dockerize all services
- Setup CI/CD

---

## 🔗 System Architecture
                    ┌─────────────┐
                    │   Frontend  │
                    │  (Member 1) │
                    └──────┬──────┘
                           │ API Calls
                           ▼
                    ┌─────────────┐        ┌──────────────┐
                    │   Backend   │◄──────►│   Database   │
                    │  (Member 2) │        │  (Member 3)  │
                    └──────┬──────┘        └──────────────┘
                           │ HTTP
                           ▼
                    ┌─────────────┐
                    │  ML Service │
                    │  (Member 4) │
                    └─────────────┘

            🐳 All services containerized by Member 4


# Clone the repository
git clone https://github.com/<your-org>/swapna.git
cd swapna

# Run entire system
docker-compose up --build

# Or run individually
cd frontend     && npm install && npm run dev
cd backend      && npm install && npm run dev
cd ml-service   && pip install -r requirements.txt && python app.py

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
