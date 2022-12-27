const express = require('express');

const app = express();

// Ensuring the server can parse JSON
app.use(express.json());

app.post('/calculator', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        status: 'success'
    });
});

const port = 4090;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});