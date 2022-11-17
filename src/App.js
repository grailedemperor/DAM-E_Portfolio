import './App.css';
import Banner from './components/Banner.js'
import Resume from './components/Resume.js'
import Footer from './components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/*' element ={<Banner />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
