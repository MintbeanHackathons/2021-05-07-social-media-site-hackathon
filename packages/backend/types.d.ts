import { Request } from "express";
import { Session } from "express-session";

interface Tweet {
  _id: number;
  user: User;
  text: string;
  createdAt: string;
}

interface User {
  _id: number;
  handle: string;
}

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}
