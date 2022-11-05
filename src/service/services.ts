import { ITweet, IService} from './../types/interface';
import { repository } from "../repository/repository";


class Service implements IService {
    getLastTweets(startIndex: number, count: number): ITweet[]{
        const all: ITweet[] = repository.getTweets();
        const lasts: ITweet[] = [];

        for(let [index, el] of all.entries()){
            if(index >= startIndex && index <= startIndex + count){
                lasts.push(el);
            }
        }

        return lasts;
    }
    getLastTweetsByUsername(username: string, startIndex: number, count: number): ITweet[]{
        const all: ITweet[] = repository.getTweetsByUsername(username);
        const lasts: ITweet[] = [];

        for(let [index, el] of all.entries()){
            if(index >= startIndex && index <= startIndex + count){
                lasts.push(el)
            }
        }

        return lasts
    }
}

export const service = new Service();