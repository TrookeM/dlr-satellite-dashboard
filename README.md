# 🛰️ DLR Telemetry Dashboard

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Lit](https://img.shields.io/badge/lit-324FFF.svg?style=for-the-badge&logo=lit&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF.svg?style=for-the-badge)

A proof-of-concept frontend dashboard designed for the German Aerospace Center (DLR). This project demonstrates a modern, modular, and reactive architecture for real-time satellite telemetry visualization.

## 🌟 Features

- **Component-Driven Architecture:** Combines React's state management with Lit's encapsulated Web Components.
- **Advanced UI/UX:** Implements a modern "Glassmorphism" aesthetic with responsive grids and dynamic hover states.
- **Real-Time Data Visualization:** Uses Recharts with custom SVG gradients and blur filters for cyberpunk-style telemetry tracking.
- **Dynamic Status Alerts:** Automated visual feedback (CSS keyframe pulses and color shifts) based on critical battery levels.

## 🏗️ Tech Stack (The DLR Architecture)

1. **React (The Orchestrator):** Manages the global state (`useState`) and loops through telemetry data.
2. **Lit (The Web Components):** Encapsulates the `<satellite-card>` UI, ensuring strict CSS isolation via Shadow DOM.
3. **Kor UI:** Provides the foundational design system and strict 12-column responsive grid layouts.
4. **Recharts:** Renders dynamic, responsive Area Charts injected into Lit components via HTML `<slot>` elements.

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dlr-satellite-dashboard.git
   ```

2. Navigate into the directory:
   ```bash
   cd dlr-satellite-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```text
📦 dlr-satellite-dashboard
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 SatelliteCard.js    # Lit Web Component (UI & Glassmorphism)
 ┃ ┣ 📜 App.jsx               # React Main App (State, Grid & Recharts)
 ┃ ┣ 📜 main.jsx              # App Entry Point & Kor UI Imports
 ┃ ┗ 📜 index.css             # Global styles (Background Blobs)
 ┣ 📜 index.html              # HTML template
 ┣ 📜 package.json            # Dependencies
 ┗ 📜 README.md               # Project documentation
```

## 🧠 Core Engineering Concepts Applied

* **React State & Reactivity:** Utilizing `useState` to maintain synchronized data logic with the user view without manual DOM manipulation.
* **Shadow DOM Isolation:** Using `LitElement` to create indestructible UI components where internal CSS (`:host`, `.card`) cannot leak out or be overwritten by global stylesheets.
* **Slot Projection:** Leveraging `<slot></slot>` in Lit to allow React to pass complex sub-components (like Recharts SVGs) directly into the heart of a Web Component.
* **Modern CSS Engineering:** Implementing `backdrop-filter: blur()`, CSS variables, and `@keyframes` for high-performance visual feedback without JavaScript overhead.

---
*Designed and built as part of the technical preparation for the DLR Frontend Refactoring Project.*
