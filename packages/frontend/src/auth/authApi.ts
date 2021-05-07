import { post, get } from "../util";

export async function login(handle: string, password: string): Promise<User> {
  return post("api/auth/login", { handle, password });
}

export async function register(
  handle: string,
  password: string
): Promise<User> {
  return post("api/auth/register", { handle, password });
}

export async function checkSession(): Promise<User | null> {
  return get("api/auth/check");
}
