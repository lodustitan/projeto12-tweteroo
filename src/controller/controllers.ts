import { repository } from "../repository/repository.js";
import { service } from "../service/services.js";

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
    const { params, query } = req;
    const { page }: any = req.query;
    const startIndex: number = (Number(page) > 1)? (Number(page)*10)-9: 0; // PARA REFATORAR EM PROXIMA VERSÃO

    if(params.username){
        const lastTen = service.getLastTweets(params.username, startIndex, 10);
        res.status(200).send(lastTen);
    }
    else{
        const lastTen = service.getLastTweetsByUsername(startIndex, 10);
        res.status(200).send(lastTen);
    }
}