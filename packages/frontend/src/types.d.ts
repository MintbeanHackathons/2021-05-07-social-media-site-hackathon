interface Tweet {
  id: string;
  user: User;
  text: string;
  createdAt: string;
}

interface User {
  id: string;
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
