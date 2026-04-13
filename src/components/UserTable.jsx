export default function UserTable({ users }) {
  return (
    <table className="w-full bg-white shadow">
      <thead>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}