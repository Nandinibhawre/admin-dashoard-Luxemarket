 import { useEffect, useState } from "react";
import api from "../services/api";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ Fetch products
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // ✅ Delete product
  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      alert("Product Deleted ✅");
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Delete failed ❌");
    }
  };

  // Load data on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full max-w-6xl">
      
      {/* 🔥 FORM */}
      <ProductForm
        refresh={fetchProducts}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
      />

      {/* 🔥 TABLE */}
     <ProductTable
  products={products}
  deleteProduct={deleteProduct}
  setEditingProduct={setEditingProduct} // ✅ ADD THIS
/>
    </div>
  );
}