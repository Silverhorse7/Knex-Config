const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.get('/books', (req, res) => {
    knex('books')
    .select()
    .then(books => {
      res.json(books);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});