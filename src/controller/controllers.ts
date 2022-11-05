import { repository } from "../repository/repository.js";
import { service } from "../service/services.js";

import { Response, Request } from "express";


class Controller {

    signUp(req: Request, res: Response){
        const { username, avatar } = res.locals;
    
        repository.addUser(username, avatar);
        res.status(201).send("OK");
    }
    
    postTweets(req: Request, res: Response){
        const { username, tweet } = res.locals;
        repository.addTweet(username, tweet);
        res.status(201).send("OK");
    }
    
    getTweets(req: Request, res: Response){
        const { params } = req;
        const { page }: any = req.query;
        const startIndex: number = (Number(page) > 1)? (Number(page)*10)-9: 0; // PARA REFATORAR EM PROXIMA VERSÃO
    
        if(params.username){
            const lastTen = service.getLastTweetsByUsername(params.username, startIndex, 10);
            res.status(200).send(lastTen);
        }
        else{
            const lastTen = service.getLastTweets(startIndex, 10);
            res.status(200).send(lastTen);
        }
    }
}
export const controller = new Controller();