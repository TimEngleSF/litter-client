const express = require('express');
const path = require('path');
const morgan = require('morgan')
const app = express();


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT =  4000;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
