"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTweets = exports.postTweets = exports.signUp = void 0;
const repository_js_1 = require("../repository/repository.js");
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
}
exports.getTweets = getTweets;
