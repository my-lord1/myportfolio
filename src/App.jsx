import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from './pages/landingpage1';
import { Project } from './pages/project1';
import './App.css';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
