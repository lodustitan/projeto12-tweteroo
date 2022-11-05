import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { controller } from "../controller/controllers";
import { middleware } from "../middleware/middlewares";

const app: Application = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post("/sign-up", middleware.signUp, controller.signUp);
app.post("/tweets", middleware.postTweets, controller.postTweets);
app.get("/tweets/", controller.getTweets);
app.get("/tweets/:username", controller.getTweets);

export { app };