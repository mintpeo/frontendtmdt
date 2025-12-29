import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Snowfall from "react-snowfall";
import './App.css'

import Home from './home/home.jsx'
import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import Login from './user/login/login.jsx'

function App() {

  return (
    <>
        <Router>
            <Snowfall color="#82C3D9" style={{position: "fixed", zIndex: 9999}} />
            <Navbar />
            <main className="main-content">
                <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/user/login" element={<Login />}/>
                </Routes>
            </main>
            <Footer />
        </Router>
    </>
  )
}

export default App
