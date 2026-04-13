import { useEffect, useState } from "react";
import api from "../services/api";
export default function ProductForm({ refresh, editingProduct, setEditingProduct }) {

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });

  const [categories, setCategories] = useState([]);

  // ✅ Fetch categories safely
  useEffect(() => {
    api.get("/categories")
      .then((res) => setCategories(res.data || []))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Auto-fill form when editing
  useEffect(() => {
    if (editingProduct) {
      setProduct({
        name: editingProduct.name || "",
        description: editingProduct.description || "",
        price: editingProduct.price || "",
        stock: editingProduct.stock || "",
        categoryId: editingProduct.categoryId || "",
        image: null, // image optional in update
      });
    }
  }, [editingProduct]);

  // ✅ Submit (Add + Update)
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      Object.keys(product).forEach((key) => {
        if (product[key] !== null) {
          formData.append(key, product[key]);
        }
      });

      if (editingProduct) {
        // 🔄 UPDATE
        await api.put(`/products/${editingProduct.productId}`, formData);
        alert("Product Updated ✅");
      } else {
        // ➕ ADD
        await api.post("/products", formData);
        alert("Product Added ✅");
      }

      // Reset form
      setProduct({
        name: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        image: null,
      });

      setEditingProduct(null);
      refresh();

    } catch (err) {
      console.error(err);
      alert("Error while saving product ❌");
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-xl mb-6">
      <h2 className="font-bold text-lg mb-4">
        {editingProduct ? "Update Product" : "Add Product"}
      </h2>

      {/* NAME */}
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />

      {/* DESCRIPTION */}
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />

      {/* PRICE */}
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />

      {/* STOCK */}
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Stock"
        value={product.stock}
        onChange={(e) => setProduct({ ...product, stock: e.target.value })}
      />

      {/* CATEGORY */}
      <select
        className="border p-2 w-full mb-3 rounded"
        value={product.categoryId}
        onChange={(e) => setProduct({ ...product, categoryId: e.target.value })}
      >
        <option value="">Select Category</option>

      
{/* //ssdas */}
        {categories?.map((c, index) => (
  <option key={c.id || c._id || index} value={c.id || c._id}>
    {c.name}
  </option>
))}
      </select>

      {/* IMAGE */}
      <input
        type="file"
        className="mb-3"
        onChange={(e) =>
          setProduct({ ...product, image: e.target.files[0] })
        }
      />

      {/* IMAGE PREVIEW */}
      {product.image && (
        <img
          src={URL.createObjectURL(product.image)}
          alt="preview"
          className="w-20 h-20 object-cover rounded mb-3"
        />
      )}

      {/* BUTTON */}
      <button
        className={`px-4 py-2 text-white rounded ${
          editingProduct ? "bg-blue-500" : "bg-green-500"
        }`}
        onClick={handleSubmit}
      >
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </div>
  );
}