import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import HeroSection from './Component/Home';
import AboutStatsSection from './Component/Description';
import AdditionalServices from './Component/AdditionalServices';
import Footer from './Component/Footer';
import CareerPage from "./Component/JobPage";// New Career Page
import './App.css';

function App() {
  return (
    <Router>
      <div className='relative'>
        <Navbar />
      </div>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutStatsSection />
              <AdditionalServices />
              <Footer />
            </>
          }
        />

        {/* Careers Page */}
        <Route
          path="/careers"
          element={
            <>
              <CareerPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
