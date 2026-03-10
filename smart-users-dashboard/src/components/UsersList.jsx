import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import { useSearchStore } from "../store/searchStore";

export const UsersList = () => {
  const search = useSearchStore((s) => s.search);

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    select: (users) =>
      users.filter(
        (user) =>
          typeof user.name === "string" &&
          user.name.toLowerCase().includes(search.toLowerCase()),
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};
