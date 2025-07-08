const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.post('/api/rsvp', async (req, res) => {
  try {
    const { name, attending } = req.body;
    const guest = { name, attending, timestamp: new Date().toISOString() };
    let guests = [];
    try {
      const data = await fs.readFile(path.join(__dirname, 'guests.json'), 'utf8');
      guests = JSON.parse(data);
    } catch (err) {
      // File doesn't exist or is empty
    }
    guests.push(guest);
    await fs.writeFile(path.join(__dirname, 'guests.json'), JSON.stringify(guests, null, 2));
    res.status(200).send('RSVP saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/photos', async (req, res) => {
  try {
    const photoDir = path.join(__dirname, '../public/images');
    const files = await fs.readdir(photoDir);
    const photos = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.json(photos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => console.log(`Server running on ${process.env.BACKEND_URL || `http://localhost:${port}`}`));
