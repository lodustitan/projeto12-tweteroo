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
    getAvatarByUsername(username: string): string{
        for(let el of userList){
            if(el.username === username){
                return el.avatar;
            }
        }
        return "";
    }
    addTweet(username: string, tweet: string): void {
        const userAvatar: string = this.getAvatarByUsername(username); 
        const data: ITweet = { username, tweet, avatar: userAvatar };
        tweetList.push(data);
    }
    removeTweetByUsername(username: string): void {
        tweetList = tweetList.filter((each)=> username !== each.username );
    }
    getTweetsByUsername(username: string): ITweet[] {
        return tweetList.filter((each)=> username === each.username );
    }
    getTweets(): ITweet[] {
        return tweetList;
    }
}

export const repository = new Repository();
