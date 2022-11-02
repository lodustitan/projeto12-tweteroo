"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweets = exports.postTweets = exports.signUp = void 0;
const repository_js_1 = require("../repository/repository.js");
const services_js_1 = require("../service/services.js");
function signUp(req, res) {
    const { username, avatar } = req.body;
    repository_js_1.repository.addUser(username, avatar);
    res.status(201).send("OK");
}
exports.signUp = signUp;
function postTweets(req, res) {
    const { username, tweet } = req.body;
    repository_js_1.repository.addTweet(username, tweet);
    res.status(201).send("OK");
}
exports.postTweets = postTweets;
function getTweets(req, res) {
    const { params, query } = req;
    const { page } = req.query;
    const startIndex = (Number(page) > 1) ? (Number(page) * 10) - 9 : 0; // PARA REFATORAR EM PROXIMA VERSÃO
    if (params.username) {
        const lastTen = services_js_1.service.getLastTweets(params.username, startIndex, 10);
        res.status(200).send(lastTen);
    }
    else {
        const lastTen = services_js_1.service.getLastTweetsByUsername(startIndex, 10);
        res.status(200).send(lastTen);
    }
}
exports.getTweets = getTweets;
