// Main entry point for the React application
// This file bootstraps the app and renders it to the DOM
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get the root element and create a React root
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found - check your HTML!");
}

// Create and render the app
const root = createRoot(rootElement);
root.render(<App />);
