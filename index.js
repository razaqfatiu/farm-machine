PORT = process.env.PORT || 2222
const express = require('express');

const app = express()

app.use(express.static('public'));
app.use(express.static('public/admin'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});