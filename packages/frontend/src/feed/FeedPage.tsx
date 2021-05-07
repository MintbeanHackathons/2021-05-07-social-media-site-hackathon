import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { getFeed } from "./feedApi";

export default function FeedPage() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [tweetInputValue, setTweetInputValue] = useState<String>("");

  useEffect(() => {
    getFeed().then((tweets) => setTweets(tweets));
  }, []);

  function submit(evt: SyntheticEvent) {
    evt.preventDefault();

    const value = tweetInputValue?.trim();

    if (!value) {
      return;
    }

    alert("TWEETED" + value);
    setTweetInputValue("");
  }

  return (
    <Grid item xs={10}>
      <Paper elevation={2}>
        <form onSubmit={(evt) => submit(evt)}>
          <FormControl fullWidth>
            <Input
              id="tweet-input"
              placeholder="What's happening?"
              value={tweetInputValue}
              onChange={(evt) => setTweetInputValue(evt.target.value)}
            />
          </FormControl>
          <FormControl fullWidth>
            <Input type="submit" value="Tweet"></Input>
          </FormControl>
        </form>
      </Paper>
      {tweets.map((tweet) => (
        <Paper elevation={1} key={tweet.id}>
          <Box>
            {tweet.user.fullName} | {tweet.user.handle}
          </Box>
          <Box>{tweet.text}</Box>
        </Paper>
      ))}
    </Grid>
  );
}
