import { useEffect, useState } from "react";
import api from "../services/Api.js";
import UserTable from "../components/UserTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => setUsers(res.data));
  }, []);

  return <UserTable users={users} />;
}