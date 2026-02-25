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
