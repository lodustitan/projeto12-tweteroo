"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
let userList = [];
let tweetList = [];
class Repository {
    addUser(username, avatar) {
        const data = { username, avatar };
        userList.push(data);
    }
    getUsers() {
        return userList;
    }
    addTweet(username, tweet) {
        const data = { username, tweet };
        tweetList.push(data);
    }
    removeTweetByUsername(username) {
        tweetList = tweetList.filter((each) => username !== each.username);
    }
    getTweetsByUsername(username) {
        return tweetList.filter((each) => username === each.username);
    }
}
exports.repository = new Repository();
