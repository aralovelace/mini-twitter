import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TwitterService} from "../twitter.service";
import {Twitter} from "./twitter.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  loadedTwits: Twitter[]  = [];
  isFetch = false;
  error = null;

  constructor(private http: HttpClient,private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.isFetch= true;
    this.twitterService.fetchTweets().subscribe(tweets => {
        this.isFetch = false;
        this.loadedTwits = tweets;
      }, error => {
        this.error = error.message;
        this.isFetch= false;
      });
  }

  onSubmitTweet(twitData: {username: string, tweet: string, image:string}) {
    this.twitterService.submitTweet(twitData.username, twitData.tweet, twitData.image)
      .subscribe(responseData => {
        let index = responseData['name'];
        this.loadedTwits.unshift({
          username: twitData.username,
          tweet: twitData.tweet,
          image: twitData.image,
          id: index
        });
        }, error => { this.error.next(error.message)  });

  }

  onDeleteTweet(twitData: { id:any, index:number}) {

    this.twitterService.deleteTweet(twitData.id). subscribe(responseData =>{
      this.loadedTwits.splice(twitData.index, 1);
    }, error => {
      this.error.next(error.message)
    });
  }


}
