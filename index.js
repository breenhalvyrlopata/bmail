const express = require('express');
const cors = require('cors');
const app = express();

// 1. Enable CORS for all origins and methods
app.use(cors()); 

// 2. EXPLICITLY handle "Preflight" requests (the OPTIONS method)
app.options('*', cors()); 

app.use(express.json()); 

app.get('/emails', (req, res) => {
  console.log("Emails requested");
  res.json([]); 
});

app.post('/emails/send', (req, res) => {
  console.log("Sending email:", req.body);
  res.json({ ...req.body, id: Date.now().toString(), timestamp: Date.now() });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Bmail Backend is running!");
});
