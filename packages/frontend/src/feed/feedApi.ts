import { get, post } from "../util";

export function getFeed(): Promise<Tweet[]> {
  return get("api/posts");
}

export function submitTweet(tweet: { text: string }): Promise<void> {
  return post("api/posts", {
    text: tweet.text,
  });
}
