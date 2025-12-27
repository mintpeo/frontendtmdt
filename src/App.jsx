import './App.css'
import Home from './home/home.jsx'
import Navbar from './navbar/navbar.jsx'
import Footer from './footer/footer.jsx'

function App() {

  return (
    <>
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
