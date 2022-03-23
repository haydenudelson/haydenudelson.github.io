import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;
