const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // CRITICAL: Allow Bmail to connect
app.use(express.json()); // CRITICAL: Parse email data

app.get('/emails', (req, res) => {
  res.json([]); // Return your emails array
});

app.post('/emails/send', (req, res) => {
  const { to, subject, body } = req.body;
  // Handle sending...
  res.json({ id: Date.now().toString(), to, subject, body, timestamp: Date.now() });
});

app.listen(process.env.PORT || 3000);
