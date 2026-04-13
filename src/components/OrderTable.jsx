export default function OrderTable({ orders, approve }) {
  return (
    <table className="w-full bg-white shadow">
      <thead>
        <tr>
          <th>User</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id}>
            <td>{o.user}</td>
            <td>{o.status}</td>
            <td>
              <button onClick={() => approve(o.id)} className="bg-green-500 text-white px-2">
                Approve
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}