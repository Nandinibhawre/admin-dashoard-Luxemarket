export default function CategoryTable({ categories, deleteCategory, setEditingCategory }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <h2 className="text-lg font-semibold mb-4">Category List</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Description</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
         {categories?.map((c, index) => (
  <tr key={c.id || c._id || index}>
              <td className="py-3 px-4">{c.name}</td>

              <td className="py-3 px-4 text-gray-600">
                {c.description}
              </td>

              <td className="py-3 px-4 text-center">
                <button
                  onClick={() => deleteCategory(c.id || c._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
                <button
  onClick={() => setEditingCategory(c)}
  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
>
  Edit
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}