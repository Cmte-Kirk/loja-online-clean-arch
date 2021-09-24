import express from 'express';
import '@controllers/UsersController'
const app = express();

app.get('/', (_request, response) => response.json({
    message: 'Hello Word'
}));

app.listen(3333);