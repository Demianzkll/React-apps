const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const addRandomUser = async () => {
  const randomId = Math.floor(Math.random() * 1000);

  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      name: `Random User ${randomId}`,
      email: `user${randomId}@mail.com`,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Failed to add user");
  console.log("hi");
  return res.json();
};
