import express from 'express';
import bodyParser from "body-parser";
import KeywordsRoute from "../backend/modules/users/routes.js";
const app = express();
const PORT = 3000;

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.send('Server is running');
})

app.use('/keywords', KeywordsRoute)

app.listen(PORT, () => {
    console.log(`server is running on: http://localhost:${PORT}/`)
})
