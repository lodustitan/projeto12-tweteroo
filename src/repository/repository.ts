import { ITweet, IUser, IRepository } from "../types/interface.js";

let userList: IUser[] = [];
let tweetList: ITweet[] = [];

class Repository implements IRepository {
    addUser(username: string, avatar: string): void {
        const data: IUser = { username, avatar };
        userList.push(data);
    }
    getUsers(){
        return userList;
    }
    addTweet(username: string, tweet: string): void {
        const data: ITweet = { username, tweet };
        tweetList.push(data);
    }
    removeTweetByUsername(username: string): void {
        tweetList = tweetList.filter((each)=> username !== each.username );
    }
    getTweetsByUsername(username: string): ITweet[] {
        return tweetList.filter((each)=> username === each.username );
    }
}

export const repository = new Repository();
