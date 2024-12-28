import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Draw from './pages/DrawingPage'; // Replace with your actual Draw page
// import Login from './pages/Login'; // Replace with your actual Login page
// import Signup from './pages/Signup'; // Replace with your actual Signup page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/draw" element={<Draw />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
