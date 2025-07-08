import { useState } from 'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js';

function Home() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attending }),
      });
      if (response.ok) {
        setMessage('RSVP submitted successfully!');
        setName('');
        setAttending('yes');
      } else {
        setMessage('Error submitting RSVP. Please try again.');
      }
    } catch (error) {
      setMessage('Error submitting RSVP. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">We're Getting Married!</h2>
      <p className="text-lg text-gray-600 mb-6">
        Join us for the wedding of Scott & Nicole on August 24, 2025 at Doukenie Winery.
      </p>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">RSVP</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Attending?</label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blush text-white p-2 rounded hover:bg-pink-600"
          >
            Submit RSVP
          </button>
        </form>
        {message && <p className="mt-4 text-gray-600">{message}</p>}
      </div>
    </div>
  );
}

export default Home;
