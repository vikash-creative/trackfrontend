const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/test', (req, res) => {
    let data={
        name:"vikash"
    }
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
