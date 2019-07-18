const express = require('express');

const app = express()

app.use(express.static('public'));
app.use(express.static('public/admin'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.listen(2222, () => {
    console.log(`Server started on 2222`);
});