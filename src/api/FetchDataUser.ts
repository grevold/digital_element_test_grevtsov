interface IFormDataUser {
  name: string;
  email: string;
  message?: string;
}

/**
 *
 */
export async function FetchDataUser(data: IFormDataUser): Promise<boolean> {
  return fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.ok;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}
