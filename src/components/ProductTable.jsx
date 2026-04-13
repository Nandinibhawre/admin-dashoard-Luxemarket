export default function ProductTable({ products, deleteProduct,setEditingProduct }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <h2 className="text-lg font-semibold mb-4">Product List</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Stock</th>
            <th className="py-3 px-4">Image</th>
            <th className="py-3 px-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.productId}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="py-3 px-4">{p.name}</td>

              <td className="py-3 px-4 text-gray-700">₹{p.price}</td>

              <td className="py-3 px-4">{p.stock}</td>

              <td className="py-3 px-4">
                <img
                  src={p.imageUrl}
                  alt="product"
                  className="w-14 h-14 object-cover rounded-md border"
                />
              </td>

              <td className="py-3 px-4 text-center">
                <button
                  onClick={() => deleteProduct(p.productId)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
                <button
  onClick={() => setEditingProduct(p)}
  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm mr-2"
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