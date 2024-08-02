import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Roster from './components/roster';
import Watch from './components/watch';
import Join from './components/join';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
