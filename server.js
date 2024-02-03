const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'notis')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'notis1.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running at port 3000'));