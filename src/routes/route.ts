import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { signUp, postTweets, getTweets } from "../controller/controllers";

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/sign-up", signUp);
app.post("/tweets", postTweets);
app.get("/tweets/", getTweets);
app.get("/tweets/:username", getTweets);

export { app };