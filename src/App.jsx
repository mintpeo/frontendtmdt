import './App.css'
import Home from './home/home.jsx'
import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'
import React from "react";
import Snowfall from "react-snowfall";

function App() {

  return (
    <>
        <Snowfall color="#82C3D9" style={{position: "fixed", zIndex: 9999}} />
        <Navbar />
        <main>
            <Home />
            {/* <Routes>...</Routes> */}
        </main>
        <Footer />
    </>
  )
}

export default App
