import { UsersList } from "./components/UsersList";
import { AddUserButton } from "./components/AddUserButton";
import { GlobalLoader } from "./components/GlobalLoader";
import { useSearchStore } from "./store/searchStore";
import "./App.css";

export default function App() {
  const search = useSearchStore((s) => s.search);
  const setSearch = useSearchStore((s) => s.setSearch);

  return (
    <div className="app">
      <GlobalLoader />

      <header className="header">
        <h1>Smart Users Dashboard</h1>
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AddUserButton />
      </header>

      <UsersList />
    </div>
  );
}
