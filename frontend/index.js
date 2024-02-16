const express = require('express')
const axios = require('axios');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.use(cors())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    axios.get('http://127.0.0.1:8000/hello').then(response => {
            res.render('index', {message: response.data});
    }).catch(error => {
        res.status(500).send('Error communicating with Flask server'+error);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})