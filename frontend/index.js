const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.use(cors())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})