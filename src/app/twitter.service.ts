import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Twitter} from "./twitter.model";
import {pipe, Subject, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";


@Injectable({providedIn: 'root'})

export class TwitterService {
  error = new Subject<string>();

  constructor(private http:HttpClient) {}

  submitTweet(username: string, tweet: string, image: string) {
    const postData: Twitter = {username: username, tweet: tweet, image: image };
    this.http.post('https://mini-twitter-7414c.firebaseio.com/tweet.json',
      postData
      ).subscribe(responseData => {
        console.log(responseData);
    },
      error => {
        this.error.next(error.message)
      }
    );
  }


  fetchTweets() {
    return this.http.get('https://mini-twitter-7414c.firebaseio.com/tweet.json')
      .pipe(
        map( (responseData) => {
          const twitArray: Twitter[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              twitArray.unshift({...responseData[key], id: key})
            }
          }
          return twitArray;
          }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
    )
  }


  deleteTweet(index: any) {
    return this.http.delete('https://mini-twitter-7414c.firebaseio.com/tweet/'+index+'.json').
    subscribe(responseData =>{
      console.log(responseData);
    }, error => {
      this.error.next(error.message)
    });

  }


}
