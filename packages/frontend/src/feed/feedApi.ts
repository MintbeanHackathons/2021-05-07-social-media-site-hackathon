const data: Tweet[] = [
  {
    id: 1,
    user: {
      id: 1,
      fullName: "John Doe",
      handle: "johndoe",
    },
    text: "OK",
    createdAt: "2020-01-01 12:00:00",
  },
  {
    id: 2,
    user: {
      id: 1,
      fullName: "John Doe",
      handle: "johndoe",
    },
    text: "Not OK",
    createdAt: "2020-01-01 12:00:00",
  },
];

export function getFeed(): Promise<Tweet[]> {
  return Promise.resolve(JSON.parse(JSON.stringify(data)));
}

export function submitTweet(
  tweet: Omit<Tweet, "user" | "id" | "createdAt">
): Promise<void> {
  const nextId = data.length + 1;
  data.push({
    id: nextId,
    user: {
      id: 1,
      fullName: "John Doe",
      handle: "johndoe",
    },
    createdAt: "2020-01-01 12:00:00",
    ...tweet,
  });
  return Promise.resolve();
}
