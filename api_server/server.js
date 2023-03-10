const express = require('express');

const invalidRequest = require('./modules/invalidRequest');
const calculate = require('./modules/calculate');

const app = express();

// Ensuring the server can parse JSON
app.use(express.json());

app.post('/calculator', (req, res) => {
    // If no error function returns null, else it returns an error string
    console.log(`number1: ${req.body.number1}\nnumber2: ${req.body.number2}\noperator: ${req.body.operator}`);
    let errorMessage = invalidRequest(req);
    if(errorMessage != null){
        res.status(406).json({
            result: null,
            errorMessage: errorMessage
        });
        return;
    }
    res.status(200).json({
        result: calculate(req.body.number1, req.body.number2, req.body.operator),
        errorMessage: errorMessage
    });
});

const port = 4090;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Exporting app so it can be tested
module.exports = server;