import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.scss']
})
export class PostTweetComponent implements OnInit {

  @Output('tweetSubmitted') twitSubmitted = new EventEmitter<{username: string, tweet: string, image:string}>();

  constructor() { }

  onSubmit(tweetForm: NgForm) {
    this.twitSubmitted.emit({
      username: tweetForm.value.username,
      tweet: tweetForm.value.tweet,
      image: tweetForm.value.image
    });
    tweetForm.reset();
  }
}
