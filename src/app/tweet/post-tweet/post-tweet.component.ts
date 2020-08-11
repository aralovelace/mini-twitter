import {Component, EventEmitter,  Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.scss']
})
export class PostTweetComponent {

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
