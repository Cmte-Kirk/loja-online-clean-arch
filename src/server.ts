import express from 'express';

const app = express();

app.get('/', (_request, response) => response.json({
    message: 'Hello Word'
}));

app.listen(3333);