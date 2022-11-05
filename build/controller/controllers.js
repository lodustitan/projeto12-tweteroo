"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const repository_js_1 = require("../repository/repository.js");
const services_js_1 = require("../service/services.js");
class Controller {
    signUp(req, res) {
        const { username, avatar } = res.locals;
        repository_js_1.repository.addUser(username, avatar);
        res.status(201).send("OK");
    }
    postTweets(req, res) {
        const { username, tweet } = res.locals;
        repository_js_1.repository.addTweet(username, tweet);
        res.status(201).send("OK");
    }
    getTweets(req, res) {
        const { params } = req;
        const { page } = req.query;
        const startIndex = (Number(page) > 1) ? (Number(page) * 10) - 9 : 0; // PARA REFATORAR EM PROXIMA VERSÃO
        if (params.username) {
            const lastTen = services_js_1.service.getLastTweetsByUsername(params.username, startIndex, 10);
            res.status(200).send(lastTen);
        }
        else {
            const lastTen = services_js_1.service.getLastTweets(startIndex, 10);
            res.status(200).send(lastTen);
        }
    }
}
exports.controller = new Controller();
