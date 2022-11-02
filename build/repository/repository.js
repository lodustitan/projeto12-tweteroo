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
    getAvatarByUsername(username) {
        for (let el of userList) {
            if (el.username === username) {
                return el.avatar;
            }
        }
        return "";
    }
    addTweet(username, tweet) {
        const userAvatar = this.getAvatarByUsername(username);
        const data = { username, tweet, avatar: userAvatar };
        tweetList.push(data);
    }
    removeTweetByUsername(username) {
        tweetList = tweetList.filter((each) => username !== each.username);
    }
    getTweetsByUsername(username) {
        return tweetList.filter((each) => username === each.username);
    }
    getTweets() {
        return tweetList;
    }
}
exports.repository = new Repository();
