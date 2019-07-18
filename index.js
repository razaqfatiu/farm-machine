port = process.env.port || 2222
const express = require('express');

const app = express()

app.use(express.static('public'));
app.use(express.static('public/admin'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});