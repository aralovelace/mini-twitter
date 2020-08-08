export class Twitter {
  username: string;
  tweet: string;
  image: string;
  id?: string;

  constructor(username: string, tweet: string, image: string, id: string) {
    this.username = username;
    this.tweet = tweet;
    this.image = image;
    this.id = id;
  }

}
