import { Response, Request, NextFunction } from "express";

class Middleware {
    signUp(req: Request, res: Response, next: NextFunction){
        const { username, avatar } = req.body;

        if (!username || ""){
            res.status(400).send("Username Inválido");
        }
        else if(!avatar || ""){
            res.status(400).send("Avatar inválido");
        }

        if(username && avatar){
            res.locals.username = username;
            res.locals.avatar = avatar;
            next();
        }
    }
    postTweets(req: Request, res: Response, next: NextFunction){
        const tweet: string = String(req.body.tweet);
        const user: string = String(req.headers.user);

        if (!user || ""){
            res.status(400).send("Username Inválido");
        }
        else if(!tweet || ""){
            res.status(400).send("Avatar inválido");
        }

        if(user && tweet){
            res.locals.username = user;
            res.locals.tweet = tweet;
            next();
        }
    }
}

export const middleware = new Middleware();