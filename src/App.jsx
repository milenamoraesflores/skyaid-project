import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import Technology from './pages/Technology';
import Partnership from './pages/Partnership';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problema" element={<Problem />} />
            <Route path="/solucao" element={<Solution />} />
            <Route path="/tecnologia" element={<Technology />} />
            <Route path="/parcerias" element={<Partnership />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;