# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Stock Dashboard App

A modern, responsive stock dashboard web app built with React, Tailwind CSS, and DaisyUI.
This app simulates a trading platform interface with sections like Watchlist, Orders, Portfolio, Bids, Basket, and Profile.
It’s fully frontend-based (no backend) and designed for a mobile-first responsive experience that adapts beautifully to larger screens.


🧰 Tech Stack

⚛️ React JS – Frontend framework

🎨 Tailwind CSS – Styling and responsiveness

💎 DaisyUI – Prebuilt UI components

🧭 React Router DOM – Navigation between pages

📱 Responsive UI – Scales perfectly across mobile, tablet, and desktop


project-root/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Headers.jsx
│   │
│   ├── pages/
│   │   ├── Watchlist.jsx
│   │   ├── Orders.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Bids.jsx
│   │   ├── Basket.jsx
│   │   ├── Profile.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── tailwind.config.js
├── README.md
└── vite.config.js



# Install dependencies
npm install

# Run the development server
npm run dev

# Then open http://localhost:5173

# Deployed link of Netlify
https://preeminent-panda-f6fe69.netlify.app/


