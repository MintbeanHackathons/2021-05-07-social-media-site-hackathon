interface Tweet {
  id: number;
  user: User;
  text: string;
  createdAt: string;
}

interface User {
  id: number;
  fullName: string;
  handle: string;
}
