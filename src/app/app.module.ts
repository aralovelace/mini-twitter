import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetItemComponent } from './tweet/tweet-item/tweet-item.component';
import { AuthComponent } from './auth/auth.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TweetComponent,
    TweetItemComponent,
    AuthComponent,
    PostTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
