require(`dotenv`).config();
const express = require(`express`);
const app = express();
const userRouter = require(`./api/users/user.router`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(`/api/users`, userRouter);

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running on :', process.env.APP_PORT);
});