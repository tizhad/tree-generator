const express = require('express');
const cors = require('cors');
const fs = require('fs');


// Create an Express application
const app = express();
app.use(cors());
const treesData = fs.readFileSync('data.json');
const trees = JSON.parse(treesData);

app.get('/trees', (req, res) => {
    res.json(trees);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
