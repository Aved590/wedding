import { Link } from 'https://cdn.jsdelivr.net/npm/react-router-dom@6/dist/react-router-dom.min.js';

function Navbar() {
  return (
    <nav className="bg-blush p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Our Wedding</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
          <li><Link to="/our-story" className="text-gray-800 hover:text-gray-600">Our Story</Link></li>
          <li><Link to="/location" className="text-gray-800 hover:text-gray-600">Location</Link></li>
          <li><Link to="/schedule" className="text-gray-800 hover:text-gray-600">Schedule</Link></li>
          <li><Link to="/qa" className="text-gray-800 hover:text-gray-600">Q&A</Link></li>
          <li><Link to="/photos" className="text-gray-800 hover:text-gray-600">Photos</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
