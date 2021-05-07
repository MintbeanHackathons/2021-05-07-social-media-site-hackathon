export function getFeed(): Promise<Tweet[]> {
  return Promise.resolve([
    {
      id: 1,
      parentId: null,
      user: {
        id: 1,
        fullName: "John Doe",
        handle: "johndoe",
      },
      text: "OK",
      createdAt: "OK",
    },
    {
      id: 2,
      parentId: null,
      user: {
        id: 1,
        fullName: "John Doe",
        handle: "johndoe",
      },
      text: "Not OK",
      createdAt: "OK",
    },
  ]);
}
