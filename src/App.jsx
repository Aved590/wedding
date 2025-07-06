import { BrowserRouter as Router, Routes, Route } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/react-router-dom.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Location from './components/Location';
import Schedule from './components/Schedule';
import QA from './components/QA';
import Photos from './components/Photos';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream font-serif">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
