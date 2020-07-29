import {Component, OnDestroy, OnInit} from '@angular/core';
import {Twitter} from "./twitter.model";
import {TwitterService} from "./twitter.service";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mini-twitter';
  loadedTwits: Twitter[]  = [];
  isFetch = false;
  error = null;

  constructor(private http: HttpClient, private twitterService: TwitterService) {}

  ngOnInit(): void {
    this.isFetch= true;
    this.twitterService.fetchTweets().subscribe(tweets => {
      this.isFetch = false;
      this.loadedTwits = tweets;
    },
    error => {
    this.error = error.message;
    this.isFetch= false;
    });
  }

  onSubmit(tweetForm: NgForm) {
    this.twitterService.submitTweet(tweetForm.value.username, tweetForm.value.tweet, tweetForm.value.image);
    this.loadedTwits.unshift(tweetForm.value);
    tweetForm.reset();
  }

  onDelete(index:any) {
    this.twitterService.deleteTweet(index);
    this.loadedTwits.splice(index, 1);

  }
}
