const root =
  // @ts-ignore
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/";

export function get<T = any>(url: string): Promise<T> {
  return fetch(root + url, {
    credentials: "include",
  }).then((response) => response.json());
}

export function post<T = any>(url: string, body: Object): Promise<T> {
  return fetch(root + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
