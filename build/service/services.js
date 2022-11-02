"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const repository_1 = require("../repository/repository");
class Service {
    getLastTweets(username, startIndex, count) {
        const all = repository_1.repository.getTweetsByUsername(username);
        const lasts = [];
        for (let [index, el] of all.entries()) {
            if (index >= startIndex && index <= startIndex + count) {
                lasts.push(el);
            }
        }
        return lasts;
    }
    getLastTweetsByUsername(startIndex, count) {
        const all = repository_1.repository.getTweets();
        const lasts = [];
        for (let [index, el] of all.entries()) {
            if (index >= startIndex && index <= startIndex + count) {
                lasts.push(el);
            }
        }
        return lasts;
    }
}
exports.service = new Service();
