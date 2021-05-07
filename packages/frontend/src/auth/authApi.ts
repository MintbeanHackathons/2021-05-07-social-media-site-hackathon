export async function login(handle: string, password: string): Promise<User> {
  return {
    id: 1,
    fullName: "John Doe",
    handle: "johndoe",
  };
}

export async function logout(): Promise<void> {
  return Promise.resolve();
}

export async function checkSession(): Promise<User | null> {
  return {
    id: 1,
    fullName: "John Doe",
    handle: "johndoe",
  };
}
