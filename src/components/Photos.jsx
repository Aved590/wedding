import { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js';

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error('Error fetching photos:', err));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Wedding Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <img
              key={index}
              src={`/images/${photo}`}
              alt="Wedding moment"
              className="w-full h-64 object-cover rounded shadow"
            />
          ))
        ) : (
          <p className="text-gray-600">Photos will be uploaded after the event.</p>
        )}
      </div>
    </div>
  );
}

export default Photos;
