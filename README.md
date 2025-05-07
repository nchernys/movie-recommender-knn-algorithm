# 🎬 Movie Recommender

**Movie Recommender** is a full-stack application that allows users to browse a movie database and receive personalized recommendations based on similarity. It features a React (TypeScript) frontend and a Spring Boot (Java) backend with a machine learning component.

---

## 🚀 Features

- View all movies stored in the database
- Click on any movie to see its details and receive 5 similar movie recommendations
- Smart recommendation engine using a **k-Nearest Neighbors (k-NN)** algorithm
- Weighted relevance boosting to prioritize key fields
- RESTful API architecture with **Axios** used for communication between the frontend and backend

---

## 🧠 Recommendation Logic

The backend recommendation engine evaluates similarity using multiple fields:

- **Description**
- **Genre** (boosted)
- **Country** (boosted)
- **Year** (boosted)

Fields like **genre**, **country**, and **year** are given higher weight to improve the relevance of recommendations, so movies that share these characteristics are prioritized.

---

## 🖥️ Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Axios for API calls
- CSS

### Backend
- Spring Boot (Java)
- RESTful API
- Custom k-NN machine learning logic

---

## 📦 Getting Started

### Run the Frontend

- npm install  
- npm run dev

### Run the Backend

### Prerequisites

- Java 11 or higher: [Download JDK](https://adoptium.net/)
- Maven: [Download Maven](https://maven.apache.org/install.html)

Confirm installation:

- java -version  
- mvn -version

Run:

- mvn spring-boot:run