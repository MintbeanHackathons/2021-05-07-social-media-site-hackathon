export function getFeed(): Promise<Tweet[]> {
  return Promise.resolve([
    {
      id: 1,
      userId: 1,
      text: "OK",
      createdAt: "OK",
    },
  ]);
}
