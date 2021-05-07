import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { getFeed } from "./feedApi";

export default function FeedPage() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  useEffect(() => {
    getFeed().then((tweets) => setTweets(tweets));
  });
  return (
    <Grid item xs={4}>
      {tweets.map((tweet) => (
        <div key={tweet.id}>{tweet.text}</div>
      ))}
    </Grid>
  );
}
