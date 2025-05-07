const express = require('express');
const cors = require('cors');
const plans = require('./data/plans.json');

const app = express();
app.use(cors());

app.get('/api/plans', (req, res) => {
  res.json(plans);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));