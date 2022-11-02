import { repository } from "../repository/repository.js";

import { Response, Request } from "express";


export function signUp(req: Request, res: Response){
    const { username, avatar } = req.body;

    repository.addUser(username, avatar);
    res.status(201).send("OK");
}

export function postTweets(req: Request, res: Response){
    const { username, tweet } = req.body;

    repository.addTweet(username, tweet);
    res.status(201).send("OK");
}

export function getTweets(req: Request, res: Response){
    
}