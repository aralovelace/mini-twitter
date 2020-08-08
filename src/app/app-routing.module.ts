import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {TweetComponent} from "./tweet/tweet.component";


const routes: Routes = [
  { path: '', redirectTo: '/tweets', pathMatch: 'full' },
  { path: 'tweets', component: TweetComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
