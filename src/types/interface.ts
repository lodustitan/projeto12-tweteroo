export interface IUser{
    username: string,
    avatar: string
}

export interface ITweet extends IUser{
    tweet: string,
}

export interface IRepository {
    addUser(username: string, avatar: string): void,
    getUsers(): IUser[],

    addTweet(username: string, tweet: string): void,
    removeTweetByUsername(username: string): void,
    getTweetsByUsername(username: string): ITweet[]
    getTweets(): ITweet[]
}

export interface IService {
    getLastTweets(username: string, startIndex: number, count: number): ITweet[],
    getLastTweetsByUsername(startIndex: number, count: number): ITweet[]
}