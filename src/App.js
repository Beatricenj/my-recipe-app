import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainIndex from './components/MainIndex';
import MainAbout from './components/MainAbout';
import MainContact from './components/MainContact';
import MainRecipes from './components/MainRecipes';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './styles/styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainIndex />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/contact" element={<MainContact />} />
          <Route path="/recipes" element={<MainRecipes />} /> {/* Recipes route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}  />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
