import express, { request } from "express";
//import '@controller/UsersController';
const app = express();

app.get('/',(request, response) => {
    return response.json({ message: 'Hello Word'});
})

app.listen(3333);