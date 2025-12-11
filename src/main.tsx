import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./about.tsx";
import Download from "./download.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preferences from "./preferences.tsx";
import Purchase from "./purchase.tsx";
import Accessibility from "./accessibility.tsx";
import Privacy from "./privacy.tsx";
import Terms from "./terms.tsx";
import FAQ from "./faq.tsx";
import Contact from "./contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
