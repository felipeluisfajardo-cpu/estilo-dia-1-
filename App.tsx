
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StyleBot from './components/StyleBot';
import Home from './pages/Home';
import RegionTrends from './pages/RegionTrends';
import Shopping from './pages/Shopping';
import Journal from './pages/Journal';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tendencias/:regionId" element={<RegionTrends />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/journal" element={<Journal />} />
          </Routes>
        </div>
        <Footer />
        <StyleBot />
      </div>
    </Router>
  );
};

export default App;
