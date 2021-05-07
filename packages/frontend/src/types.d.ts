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

interface State {
  user: User | null;
}

interface Action {
  type: "setUser" | "unsetUser";
  payload: any;
}
