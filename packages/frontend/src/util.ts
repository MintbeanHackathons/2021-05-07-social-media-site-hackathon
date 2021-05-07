const root =
  // @ts-ignore
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/";

export function get<T = any>(url: string): Promise<T> {
  return fetch(root + url, {
    credentials: "include",
  }).then((response) => response.json());
}

export function post<T = any>(url: string, body?: Object): Promise<T> {
  const opts: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  };

  if (body) {
    opts.body = JSON.stringify(body);
  }

  return fetch(root + url, opts).then((response) => response.json());
}
