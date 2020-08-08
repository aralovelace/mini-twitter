import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TwitterService} from "../../twitter.service";
import {Twitter} from "../twitter.model";

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent  {

  loadedTwits: Twitter[]  = [];
  @Input() tweet: Twitter;
  @Output('deleteTweet') deleteTwit = new EventEmitter<{id:any}>();


  onDeleteEvent(id: any) {
    this.deleteTwit.emit({
      id: id
    });
  }
}
