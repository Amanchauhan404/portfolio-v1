// Main entry point for the React application
// This file bootstraps the app and renders it to the DOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Get the root element and create a React root
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Create and render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
