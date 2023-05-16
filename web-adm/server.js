import express from 'express';
import wineRouter from './routers/wineRouter.js';

const app = express();

const port = 3000;

app.use('/', wineRouter)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
