export interface IUser{
    username: string,
    avatar: string
}

export interface ITweet{
    username: string,
    tweet: string
}

export interface IRepository {
    addUser(username: string, avatar: string): void,
    getUsers(): IUser[],

    addTweet(username: string, tweet: string): void,
    removeTweetByUsername(username: string): void,
    getTweetsByUsername(username: string): ITweet[]
}