"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
class Middleware {
    signUp(req, res, next) {
        const { username, avatar } = req.body;
        if (!username || "") {
            res.status(400).send("Username Inválido");
        }
        else if (!avatar || "") {
            res.status(400).send("Avatar inválido");
        }
        if (username && avatar) {
            res.locals.username = username;
            res.locals.avatar = avatar;
            next();
        }
    }
    postTweets(req, res, next) {
        const tweet = String(req.body.tweet);
        const user = String(req.headers.user);
        if (!user || "") {
            res.status(400).send("Username Inválido");
        }
        else if (!tweet || "") {
            res.status(400).send("Avatar inválido");
        }
        if (user && tweet) {
            res.locals.username = user;
            res.locals.tweet = tweet;
            next();
        }
    }
}
exports.middleware = new Middleware();
